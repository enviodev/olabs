/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { indexer, ConditionalTokens_ApprovalForAll, ConditionalTokens_TransferBatch, ConditionalTokens_TransferSingle, ConditionalTokens_PositionSplit, ConditionalTokens_PositionsMerge, ConditionalTokens_PayoutRedemption, ConditionalTokens_URI, CTFExchange_OrderFilled } from "envio";

indexer.onEvent(
  { contract: "ConditionalTokens", event: "ApprovalForAll" },
  async ({ event, context }) => {
  const entity: ConditionalTokens_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.ConditionalTokens_ApprovalForAll.set(entity);
}
);

indexer.onEvent(
  { contract: "ConditionalTokens", event: "TransferBatch" },
  async ({ event, context }) => {
  const entity: ConditionalTokens_TransferBatch = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    ids: event.params.ids,
    values: event.params.values,
  };

  context.ConditionalTokens_TransferBatch.set(entity);
}
);

indexer.onEvent(
  { contract: "ConditionalTokens", event: "TransferSingle" },
  async ({ event, context }) => {
  const entity: ConditionalTokens_TransferSingle = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
    value: event.params.value,
  };

  context.ConditionalTokens_TransferSingle.set(entity);
}
);

indexer.onEvent(
  { contract: "ConditionalTokens", event: "URI" },
  async ({ event, context }) => {
  const entity: ConditionalTokens_URI = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
    event_id: event.params.id,
  };

  context.ConditionalTokens_URI.set(entity);
}
);

// PositionSplit(address indexed stakeholder, address collateralToken, bytes32 indexed parentCollectionId, bytes32 indexed conditionId, uint[] partition, uint amount)
indexer.onEvent(
  { contract: "ConditionalTokens", event: "PositionSplit" },
  async ({ event, context }) => {
  const entity: ConditionalTokens_PositionSplit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stakeholder: event.params.stakeholder,
    collateralToken: event.params.collateralToken,
    parentCollectionId: event.params.parentCollectionId,
    conditionId: event.params.conditionId,
    partition: event.params.partition,
    amount: event.params.amount,
  };

  context.ConditionalTokens_PositionSplit.set(entity);
}
);

// PositionsMerge(address indexed stakeholder, address collateralToken, bytes32 indexed parentCollectionId, bytes32 indexed conditionId, uint[] partition, uint amount);
indexer.onEvent(
  { contract: "ConditionalTokens", event: "PositionsMerge" },
  async ({ event, context }) => {
  const entity: ConditionalTokens_PositionsMerge = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stakeholder: event.params.stakeholder,
    collateralToken: event.params.collateralToken,
    parentCollectionId: event.params.parentCollectionId,
    conditionId: event.params.conditionId,
    partition: event.params.partition,
    amount: event.params.amount,
  };

  context.ConditionalTokens_PositionsMerge.set(entity);
}
);

// PayoutRedemption(address indexed redeemer, address indexed collateralToken,  bytes32 indexed parentCollectionId, bytes32 conditionId, uint[] indexSets, uint payout)
indexer.onEvent(
  { contract: "ConditionalTokens", event: "PayoutRedemption" },
  async ({ event, context }) => {
  const entity: ConditionalTokens_PayoutRedemption = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    redeemer: event.params.redeemer,
    collateralToken: event.params.collateralToken,
    parentCollectionId: event.params.parentCollectionId,
    conditionId: event.params.conditionId,
    indexSets: event.params.indexSets,
    payout: event.params.payout,
  };

  context.ConditionalTokens_PayoutRedemption.set(entity);
}
);

// OrderFilled(bytes32 indexed orderHash, address indexed maker, address indexed taker, uint256 makerAssetId, uint256 takerAssetId, uint256 makerAmountFilled, uint256 takerAmountFilled, uint256 fee)
indexer.onEvent(
  { contract: "CTFExchange", event: "OrderFilled" },
  async ({ event, context }) => {
  const entity: CTFExchange_OrderFilled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderHash: event.params.orderHash,
    maker: event.params.maker,
    taker: event.params.taker,
    makerAssetId: event.params.makerAssetId,
    takerAssetId: event.params.takerAssetId,
    makerAmountFilled: event.params.makerAmountFilled,
    takerAmountFilled: event.params.takerAmountFilled,
    fee: event.params.fee,
  };

  context.CTFExchange_OrderFilled.set(entity);
}
);