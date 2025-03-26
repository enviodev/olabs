import assert from "assert";
import { 
  TestHelpers,
  ConditionalTokens_ApprovalForAll
} from "generated";
const { MockDb, ConditionalTokens } = TestHelpers;

describe("ConditionalTokens contract ApprovalForAll event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ConditionalTokens contract ApprovalForAll event
  const event = ConditionalTokens.ApprovalForAll.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("ConditionalTokens_ApprovalForAll is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ConditionalTokens.ApprovalForAll.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualConditionalTokensApprovalForAll = mockDbUpdated.entities.ConditionalTokens_ApprovalForAll.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedConditionalTokensApprovalForAll: ConditionalTokens_ApprovalForAll = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      account: event.params.account,
      operator: event.params.operator,
      approved: event.params.approved,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualConditionalTokensApprovalForAll, expectedConditionalTokensApprovalForAll, "Actual ConditionalTokensApprovalForAll should be the same as the expectedConditionalTokensApprovalForAll");
  });
});
