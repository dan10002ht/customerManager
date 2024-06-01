import { useState } from "react";
import { api } from "../helpers/api";

export default function useCreateApi({
  url,
  fullResp = false,
  successMsg = "Saved successfully",
  errorMsg = "Failed to save",
}) {
  const [creating, setCreating] = useState(false);
  /**
   * @param data
   * @returns {Promise<{success: boolean, error}>}
   */
  const handleCreate = async (data) => {
    try {
      setCreating(true);
      const resp = await api({
        url,
        data,
        method: "POST",
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
      setCreating(false);
    }
  };

  return { creating, handleCreate };
}
