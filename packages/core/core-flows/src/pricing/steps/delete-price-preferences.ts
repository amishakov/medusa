import { IPricingModuleService } from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"
import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk"

/**
 * The IDs of price preferences to delete.
 */
export type DeletePricePreferencesStepInput = string[]

export const deletePricePreferencesStepId = "delete-price-preferences"
/**
 * This step deletes one or more price preferences.
 */
export const deletePricePreferencesStep = createStep(
  deletePricePreferencesStepId,
  async (ids: DeletePricePreferencesStepInput, { container }) => {
    const service = container.resolve<IPricingModuleService>(Modules.PRICING)

    await service.softDeletePricePreferences(ids)

    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<IPricingModuleService>(Modules.PRICING)

    await service.restorePricePreferences(prevIds)
  }
)
