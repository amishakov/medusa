import { PaginatedResponse } from "../../common"
import { AdminDraftOrder } from "./entities"

export interface AdminDraftOrderResponse {
  draft_order: AdminDraftOrder
}

export interface AdminDraftOrderListResponse
  extends PaginatedResponse<{
    draft_orders: AdminDraftOrder[]
  }> {}
