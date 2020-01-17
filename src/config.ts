import {
  OrderKind,
  ActionsOrderActionKind,
  DynamicActionsOrder
} from "@0xcert/ethereum-gateway";

import {
  buildGatewayConfig,
  NetworkKind
} from "@0xcert/ethereum-metamask-provider";

export const config = {
  providerConfig: {
    requiredConfirmations: 1,
    gatewayConfig: buildGatewayConfig(NetworkKind.ROPSTEN) // ropsten config
  },
  assetLedgerId: "", // Input you own asset ledger id
  account1Id: "", // Input your primary metamask account Id.
  signature: ""
};

export const order = {
  kind: OrderKind.DYNAMIC_ACTIONS_ORDER,
  signers: [config.account1Id],
  seed: Date.now(),
  expiration: Date.now() + 86400000,
  actions: [
    {
      kind: ActionsOrderActionKind.TRANSFER_ASSET,
      ledgerId: config.assetLedgerId,
      senderId: config.account1Id,
      assetId: "100"
    },
    {
      kind: ActionsOrderActionKind.CREATE_ASSET,
      ledgerId: config.assetLedgerId,
      senderId: config.account1Id,
      assetId: "101",
      assetImprint:
        "c6c14772f269bed1161d4350403f4c867c749b3cce7abe84c6d0605068cd8a87"
    }
  ]
} as DynamicActionsOrder;
