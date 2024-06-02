import {
  Button,
  DatePicker,
  Flex,
  Input,
  Pagination,
  Radio,
  Select,
  Table,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import useFetchWithPagination from "../../../hooks/useFetchWithPagination";
import useDebounce from "../../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { mappingPlaceHolder } from "../../../const/mapping";
import { convertVietnameseDateToJsDate } from "../../../helpers/prepareToGlobalDate";
const { RangePicker } = DatePicker;

const CustomerTable = () => {
  const navigate = useNavigate();
  const { data, handleRefetchByQuery, pagination, fetched, loading } =
    useFetchWithPagination({
      apiUrl: "/customer/list",
      defaultSortValue: "desc",
      defaultFetchFilter: {
        sort: "desc",
        gender: "all",
      },
    });
  const [pageNum, setPageNum] = useState(1);
  const [searchText, setSearchText] = useState("");
  const searchTextDebounce = useDebounce(searchText, 500);
  const [sort, setSort] = useState("desc");
  const [searchField, setSearchField] = useState("ten_khach_hang");
  const [gender, setGender] = useState("all");
  const [range, setRange] = useState({ start: null, end: null });

  const handlePreviousPage = () => {
    setPageNum((prev) => (prev === 1 ? prev : prev - 1));
    handleRefetchByQuery({
      after: null,
      before: pagination.previousCursor,
      page: pageNum - 1,
      sort,
      gender,
      range,
    });
  };
  const handleNextPage = async () => {
    setPageNum((prev) => prev + 1);
    await handleRefetchByQuery({
      after: pagination.nextCursor,
      before: null,
      page: pageNum + 1,
      sort,
      gender,
      range,
    });
  };

  const handleSearch = async (val, _searchField = searchField) => {
    setPageNum(1);
    await handleRefetchByQuery({
      after: null,
      before: null,
      page: pageNum,
      searchField: _searchField,
      searchText: val,
      sort,
      gender,
      range,
    });
  };

  const handleSort = async (val) => {
    setPageNum(1);
    setSort(val);
    await handleRefetchByQuery({
      after: null,
      before: null,
      page: pageNum,
      searchText,
      sort: val,
      gender,
      range,
    });
  };

  const handleSelectGender = async (_gender) => {
    setPageNum(1);
    setGender(_gender);
    await handleRefetchByQuery({
      after: null,
      before: null,
      page: pageNum,
      searchText,
      sort,
      gender: _gender,
      range,
    });
  };

  const handleSelectOnRange = async (pointInfo = {}) => {
    setPageNum(1);
    setRange((prev) => ({
      ...prev,
      ...pointInfo,
    }));
    await handleRefetchByQuery({
      after: null,
      before: null,
      page: pageNum,
      searchText,
      sort,
      gender,
      ...pointInfo,
    });
  };

  useEffect(() => {
    if (!fetched) return;
    handleSearch(searchTextDebounce);
  }, [searchTextDebounce]);

  const columns = useMemo(
    () => [
      {
        title: "Tên khách hàng",
        dataIndex: "ten_khach_hang",
      },
      {
        title: "Giới tính",
        dataIndex: "gender",
        render: (val) => {
          if (val === "male") return "Nam";
          return "Nữ";
        },
      },
      {
        title: "Số điện thoại",
        dataIndex: "so_dien_thoai",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Ngày tạo",
        dataIndex: "createdAt",
        render: (val) => dayjs(new Date(val)).format("hh:mm DD/MM/YYYY"),
      },
      {
        title: "Hành động",
        render: (val, _data) => {
          return (
            <Flex gap="small">
              <Button
                onClick={() => {
                  navigate(`/customer/${_data.id}`);
                }}
              >
                Sửa
              </Button>
              <Button
                onClick={() => {
                  window.open(`/information/${_data.id}`);
                }}
              >
                In
              </Button>
            </Flex>
          );
        },
      },
    ],
    []
  );

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Flex vertical gap="middle">
      <Flex wrap gap="middle">
        <Select
          defaultValue="ten_khach_hang"
          style={{ width: 120 }}
          onChange={(val) => {
            setSearchField(val);
            if (searchText.trim()) {
              handleSearch(searchText, val);
            }
          }}
          options={[
            { value: "ten_khach_hang", label: "Theo tên" },
            { value: "so_dien_thoai", label: "Theo số điện thoại" },
            { value: "email", label: "Theo email" },
          ]}
        />
        <Input
          style={{ maxWidth: "300px" }}
          placeholder={`Nhập vào ${mappingPlaceHolder[searchField]}`}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Flex wrap="nowrap" gap="middle">
          <Radio.Group
            onChange={(e) => {
              handleSort(e.target.value);
            }}
            defaultValue="desc"
            buttonStyle="solid"
          >
            <Radio.Button value="desc">Giảm dần</Radio.Button>
            <Radio.Button value="asc">Tăng dần</Radio.Button>
          </Radio.Group>
        </Flex>
        <Flex wrap="nowrap" gap="middle">
          <Radio.Group
            onChange={(e) => {
              handleSelectGender(e.target.value);
            }}
            defaultValue="all"
            buttonStyle="solid"
          >
            <Radio.Button value="all">Tất cả</Radio.Button>
            <Radio.Button value="male">Nam</Radio.Button>
            <Radio.Button value="female">Nữ</Radio.Button>
          </Radio.Group>
        </Flex>
      </Flex>
      <Flex gap="middle">
        <RangePicker
          format={"DD/MM/YYYY"}
          onBlur={(e, info) => {
            console.log(e.target.value);
            if (!e.target.value) return;
            return handleSelectOnRange({
              [info.range]: new Date(
                convertVietnameseDateToJsDate(e.target.value)
              ).toISOString(),
            });
          }}
        />
      </Flex>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
        loading={loading}
      />
      <Pagination
        pageSize={10}
        total={pagination.total}
        pageSizeOptions={3}
        onChange={(page) => {
          if (page === pageNum + 1) {
            handleNextPage();
          }
          if (page === pageNum - 1) {
            handlePreviousPage();
          }
        }}
      />
    </Flex>
  );
};

export default CustomerTable;
