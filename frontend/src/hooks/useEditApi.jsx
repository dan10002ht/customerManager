import { useState } from "react";
import { api } from "../helpers/api";

export default function useEditApi({
  url,
  fullResp = false,
  successMsg = "Saved successfully",
  errorMsg = "Failed to save",
}) {
  const [editing, setEditing] = useState(false);
  /**
   * @param data
   * @returns {Promise<{success: boolean, error}>}
   */
  const handleEdit = async (data) => {
    try {
      setEditing(true);
      const resp = await api({
        url,
        data,
        method: "PUT",
      });
      if (resp.success) {
        console.log(successMsg);
      }
      if (resp.error) {
        console.log(errorMsg);
      }
      return fullResp ? resp : resp.success;
    } catch (e) {
      return fullResp ? { success: false, error: e.message } : false;
    } finally {
      setEditing(false);
    }
  };

  return { editing, handleEdit };
}
