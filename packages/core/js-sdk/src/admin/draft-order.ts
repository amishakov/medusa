import { HttpTypes } from "@medusajs/types"

import { Client } from "../client"
import { ClientHeaders } from "../types"

export class DraftOrder {
  /**
   * @ignore
   */
  private client: Client
  /**
   * @ignore
   */
  constructor(client: Client) {
    this.client = client
  }

  /**
   * This method retrieves a draft order by its ID. It sends a request to the
   * [Get Draft Order](https://docs.medusajs.com/api/admin#draft-orders_getdraftordersid)
   * API route.
   *
   * @param id - The draft order's ID.
   * @param query - Configure the fields to retrieve in the draft order.
   * @param headers - Headers to pass in the request
   * @returns The draft order's details.
   *
   * @example
   * To retrieve a draft order by its ID:
   *
   * ```ts
   * sdk.admin.draftOrder.retrieve("draft_order_123")
   * .then(({ draft_order }) => {
   *   console.log(draft_order)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.draftOrder.retrieve("draft_order_123", {
   *   fields: "id,*items"
   * })
   * .then(({ draft_order }) => {
   *   console.log(draft_order)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  async retrieve(
    id: string,
    query?: HttpTypes.AdminDraftOrderParams,
    headers?: ClientHeaders
  ) {
    return await this.client.fetch<HttpTypes.AdminDraftOrderResponse>(
      `/admin/draft-orders/${id}`,
      {
        query,
        headers,
      }
    )
  }

  /**
   * This method retrieves a paginated list of draft orders. It sends a request to the
   * [List Draft Orders](https://docs.medusajs.com/api/admin#draft-orders_getdraftorders) API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of draft orders.
   *
   * @example
   * To retrieve the list of draft orders:
   *
   * ```ts
   * sdk.admin.draftOrder.list()
   * .then(({ draft_orders, count, limit, offset }) => {
   *   console.log(draft_orders)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.draftOrder.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ draft_orders, count, limit, offset }) => {
   *   console.log(draft_orders)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each draft order:
   *
   * ```ts
   * sdk.admin.draftOrder.list({
   *   fields: "id,*items"
   * })
   * .then(({ draft_orders, count, limit, offset }) => {
   *   console.log(draft_orders)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  async list(
    queryParams?: HttpTypes.AdminDraftOrderListParams,
    headers?: ClientHeaders
  ) {
    return await this.client.fetch<HttpTypes.AdminDraftOrderListResponse>(
      `/admin/draft-orders`,
      {
        query: queryParams,
        headers,
      }
    )
  }

  /**
   * This method creates a draft order. It sends a request to the
   * [Create Draft Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftorders) API route.
   *
   * @param body - The data to create the draft order.
   * @param query - Configure the fields to retrieve in the draft order.
   * @param headers - Headers to pass in the request.
   *
   * @example
   * To create a draft order:
   *
   * ```ts
   * sdk.admin.draftOrder.create({
   *   email: "test@test.com",
   *   items: [
   *     {
   *       variant_id: "variant_123",
   *       quantity: 1,
   *     },
   *   ],
   *   region_id: "region_123",
   *   sales_channel_id: "sales_channel_123",
   * })
   * .then(({ draft_order }) => {
   *   console.log(draft_order)
   * })
   * ```
   */
  async create(
    body: HttpTypes.AdminCreateDraftOrder,
    query?: HttpTypes.AdminDraftOrderParams,
    headers?: ClientHeaders
  ) {
    return await this.client.fetch<HttpTypes.AdminDraftOrderResponse>(
      `/admin/draft-orders`,
      {
        method: "POST",
        body,
        query,
        headers,
      }
    )
  }

  /**
   * This method updates a draft order. It sends a request to the
   * [Update Draft Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersid) API route.
   *
   * @param id - The draft order's ID.
   * @param body - The data to update the draft order.
   * @param query - Configure the fields to retrieve in the draft order.
   * @param headers - Headers to pass in the request.
   *
   * @example
   * To update a draft order:
   *
   * ```ts
   * sdk.admin.draftOrder.update("draft_order_123", {
   *   email: "test@test.com",
   * })
   * .then(({ draft_order }) => {
   *   console.log(draft_order)
   * })
   * ```
   */
  async update(
    id: string,
    body: HttpTypes.AdminUpdateDraftOrder,
    query?: HttpTypes.AdminDraftOrderParams,
    headers?: ClientHeaders
  ) {
    return await this.client.fetch<HttpTypes.AdminDraftOrderResponse>(
      `/admin/draft-orders/${id}`,
      {
        method: "POST",
        body,
        query,
        headers,
      }
    )
  }
}
