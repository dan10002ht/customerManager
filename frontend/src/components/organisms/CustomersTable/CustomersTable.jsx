import { Button, Flex, Input, Pagination, Table } from "antd";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import useFetchWithPagination from "../../../hooks/useFetchWithPagination";
import useDebounce from "../../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const CustomerTable = () => {
  const navigate = useNavigate();
  const { data, handleRefetchByQuery, pagination, fetched } =
    useFetchWithPagination({
      apiUrl: "/customer/list",
      defaultFetchFilter: {},
    });
  console.log({ pagination });
  const [pageNum, setPageNum] = useState(1);
  const [searchText, setSearchText] = useState("");
  const searchTextDebounce = useDebounce(searchText, 500);

  const handlePreviousPage = () => {
    setPageNum((prev) => (prev === 1 ? prev : prev - 1));
    handleRefetchByQuery({
      after: null,
      before: pagination.previousCursor,
      page: pageNum - 1,
    });
  };
  const handleNextPage = () => {
    setPageNum((prev) => prev + 1);
    handleRefetchByQuery({
      after: pagination.nextCursor,
      before: null,
      page: pageNum + 1,
    });
  };

  const handleSearch = async (val) => {
    setPageNum(1);
    handleRefetchByQuery({
      after: null,
      before: null,
      page: pageNum,
      searchText: val,
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
    <div>
      <div className="mt-2">
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Input
        placeholder="Nhập vào tên nhân viên"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
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
    </div>
  );
};

export default CustomerTable;
