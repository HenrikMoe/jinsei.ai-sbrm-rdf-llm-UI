const platinumProof =
{
  "BaseInformation": [
    {
      "Code": "Local",
      "NamespacePrefix": "report",
      "NamespaceIdentifier": "http://luca.auditchain.finance/report",
      "SchemaLocation": "report.xsd",
      "DefaultLanguage": "en"
    },
    {
      "Code": "Import",
      "NamespacePrefix": "proof",
      "NamespaceIdentifier": "http://www.xbrlsite.com/seattlemethod/proof",
      "SchemaLocation": "http://www.xbrlsite.com/seattlemethod/platinum/proof/base-taxonomy/proof.xsd",
      "DefaultLanguage": "en",
      "TaxonomyDescription": "Platinum 2023-07-08"
    }
  ],
  "Terms": [
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Balance Sheet [Hypercube]",
      "ReportElementName": "BalanceSheetHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Balance Sheet [Line Items]",
      "ReportElementName": "BalanceSheetLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Assets [Roll Up]",
      "ReportElementName": "AssetsRollUp"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Current Assets",
      "ReportElementName": "CurrentAssets",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Noncurrent Assets",
      "ReportElementName": "NoncurrentAssets",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Assets",
      "ReportElementName": "Assets",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Liabilities and Equity [Roll Up]",
      "ReportElementName": "LiabilitiesAndEquityRollUp"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Liabilities [Roll Up]",
      "ReportElementName": "LiabilitiesRollUp"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Current Liabilities",
      "ReportElementName": "CurrentLiabilities",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Noncurrent Liabilities",
      "ReportElementName": "NoncurrentLiabilities",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Liabilities",
      "ReportElementName": "Liabilities",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Equity [Roll Up]",
      "ReportElementName": "EquityRollUp"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Equity Attributable To Controlling Interests",
      "ReportElementName": "EquityAttributableToControllingInterests",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Equity Attributable to Noncontrolling Interests",
      "ReportElementName": "EquityAttributableToNoncontrollingInterests",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Equity",
      "ReportElementName": "Equity",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Liabilities and Equity",
      "ReportElementName": "LiabilitiesAndEquity",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Net Assets [Hypercube]",
      "ReportElementName": "NetAssetsHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Net Assets [Line Items]",
      "ReportElementName": "NetAssetsLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Net Assets [Roll Up]",
      "ReportElementName": "NetAssetsRollUp"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Net Assets",
      "ReportElementName": "NetAssets",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Comprehensive Income Statement [Hypercube]",
      "ReportElementName": "ComprehensiveIncomeStatementHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Comprehensive Income Statement [Line Items]",
      "ReportElementName": "ComprehensiveIncomeStatementLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Comprehensive Income [Roll Up]",
      "ReportElementName": "ComprehensiveIncomeRollUp"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Revenues",
      "ReportElementName": "Revenues",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Expenses",
      "ReportElementName": "Expenses",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Gains",
      "ReportElementName": "Gains",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Losses",
      "ReportElementName": "Losses",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Net Income",
      "ReportElementName": "NetIncome",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Income from Normal Activities of Entity",
      "ReportElementName": "IncomeFromNormalActivitiesOfEntity",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Income from Peripheral or Incidental Transactions of Entity",
      "ReportElementName": "IncomeFromPeripheralOrIncidentalTransactionsOfEntity",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Other Comprehensive Income",
      "ReportElementName": "OtherComprehensiveIncome",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Comprehensive Income",
      "ReportElementName": "ComprehensiveIncome",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Cash Flow [Hypercube]",
      "ReportElementName": "CashFlowHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Cash Flow [Line Items]",
      "ReportElementName": "CashFlowLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Net Cash Flow [Roll Up]",
      "ReportElementName": "NetCashFlowRollUp"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Net Cash Flow Operating Activities",
      "ReportElementName": "NetCashFlowOperatingActivities",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Net Cash Flow Investing Activities",
      "ReportElementName": "NetCashFlowInvestingActivities",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Net Cash Flow Financing Activities",
      "ReportElementName": "NetCashFlowFinancingActivities",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Net Cash Flow",
      "ReportElementName": "NetCashFlow",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Assets Roll Forward [Roll Up]",
      "ReportElementName": "AssetsRollForward"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Prior Period Errors [Hypercube]",
      "ReportElementName": "PriorPeriodErrorsHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Dimension",
      "StandardLabel": "Report Date [Axis]",
      "ReportElementName": "ReportDateAxis"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Current Report [Member]",
      "ReportElementName": "CurrentReportMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Prior Report [Member]",
      "ReportElementName": "PriorReportMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Prior Period Errors [Line Items]",
      "ReportElementName": "PriorPeriodErrorsLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Prior Period Errors [Adjustment]",
      "ReportElementName": "PriorPeriodErrorsAdjustment"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Changes in Accounting Policy",
      "ReportElementName": "ChangesInAccountingPolicy",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Correction of an Error",
      "ReportElementName": "CorrectionOfAnError",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Instant",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Dimension",
      "StandardLabel": "Restatement [Axis]",
      "ReportElementName": "RestatementAxis"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Restated [Member]",
      "ReportElementName": "RestatedMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Previously Stated [Member]",
      "ReportElementName": "PreviouslyStatedMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Changes in Accounting Policy [Member]",
      "ReportElementName": "ChangesInAccountingPolicyMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Correction of Accounting Errors [Member]",
      "ReportElementName": "CorrectionsOfAccountingErrorsMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Changes in Equity [Hypercube]",
      "ReportElementName": "ChangesInEquityHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Changes in Equity [Line Items]",
      "ReportElementName": "ChangesInEquityLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Changes in Equity [Roll Forward]",
      "ReportElementName": "ChangesInEquityRollForward"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Investments by Owners",
      "ReportElementName": "InvestmentsByOwners",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Credit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Distributions to Owners",
      "ReportElementName": "DistributionsToOwners",
      "Datatype": "Monetary",
      "CalendarPeriodType": "Duration",
      "BalanceType": "Debit"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Policies [Hypercube]",
      "ReportElementName": "PoliciesHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Policies [Line Items]",
      "ReportElementName": "PoliciesLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Basis of Reporting [Text Block]",
      "ReportElementName": "BasisOfReportingTextBlock",
      "Datatype": "TextBlock",
      "CalendarPeriodType": "Duration"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Nature of Operations [Text Block]",
      "ReportElementName": "NatureOfOperationsTextBlock",
      "Datatype": "TextBlock",
      "CalendarPeriodType": "Duration"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Revenue Recognition Policy [Text Block]",
      "ReportElementName": "RevenueRecognitionPolicyTextBlock",
      "Datatype": "TextBlock",
      "CalendarPeriodType": "Duration"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Variance Analysis [Hypercube]",
      "ReportElementName": "VarianceAnalysisHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Dimension",
      "StandardLabel": "Scenario [Axis]",
      "ReportElementName": "ScenarioAxis"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Actual [Member]",
      "ReportElementName": "ActualMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Variance [Member]",
      "ReportElementName": "VarianceMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Budgeted [Member]",
      "ReportElementName": "BudgetedMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Variance Analysis  [Line Items]",
      "ReportElementName": "VarianceAnalysisLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Variance Analysis  [Roll Up]",
      "ReportElementName": "VarianceAnalysisRollUp"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Segment Revenues [Hypercube]",
      "ReportElementName": "SegmentRevenuesHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Dimension",
      "StandardLabel": "Segments [Axis]",
      "ReportElementName": "SegmentsAxis"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "All Segments [Member]",
      "ReportElementName": "AllSegmentsMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Segment Alpha [Member]",
      "ReportElementName": "SegmentAlphaMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Segment Bravo [Member]",
      "ReportElementName": "SegmentBravoMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Member",
      "StandardLabel": "Segment Charlie [Member]",
      "ReportElementName": "SegmentCharlieMember"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Segment Revenues [Line Items]",
      "ReportElementName": "SegmentRevenuesLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Segment Revenues [Set]",
      "ReportElementName": "SegmentRevenuesSet"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Weighted Average Grant Date Fair Value [Hypercube]",
      "ReportElementName": "WeightedAverageGrantDateFairValueHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Weighted Average Grant Date Fair Value [Line Items]",
      "ReportElementName": "WeightedAverageGrantDateFairValueLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Weighted Average Grant Date Fair Value [Roll Forward Info]",
      "ReportElementName": "WeightedAverageGrantDateFairValueRollForwardInfo"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Nonvested Fair Value",
      "ReportElementName": "NonvestedFairValue",
      "Datatype": "Per-Share",
      "CalendarPeriodType": "Instant"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Granted",
      "ReportElementName": "Granted",
      "Datatype": "Per-Share",
      "CalendarPeriodType": "Duration"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Vested",
      "ReportElementName": "Vested",
      "Datatype": "Per-Share",
      "CalendarPeriodType": "Duration"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Concept",
      "StandardLabel": "Forfeited",
      "ReportElementName": "Forfeited",
      "Datatype": "Per-Share",
      "CalendarPeriodType": "Duration"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Hypercube",
      "StandardLabel": "Financial Highlights [Hypercube]",
      "ReportElementName": "FinancialHighlightsHypercube"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "LineItems",
      "StandardLabel": "Financial Highlights [Line Items]",
      "ReportElementName": "FinancialHighlightsLineItems"
    },
    {
      "Prefix": "proof",
      "ReportElementCategory": "Abstract",
      "StandardLabel": "Financial Highlights [Set]",
      "ReportElementName": "FinancialHighlightsSet"
    }
  ],
  "Labels": [
    {
      "ReportElementName": "proof:Liabilities",
      "Language": "en",
      "LabelRole": "Negated",
      "Label": "Liabilities"
    },
    {
      "ReportElementName": "proof:Expenses",
      "Language": "en",
      "LabelRole": "Negated",
      "Label": "(Expenses)"
    },
    {
      "ReportElementName": "proof:Losses",
      "Language": "en",
      "LabelRole": "Negated",
      "Label": "(Losses)"
    },
    {
      "ReportElementName": "proof:Assets",
      "Language": "en",
      "LabelRole": "PeriodStart",
      "Label": "Assets, Beginning Balance"
    },
    {
      "ReportElementName": "proof:Assets",
      "Language": "en",
      "LabelRole": "PeriodEnd",
      "Label": "Assets, Ending Balance"
    },
    {
      "ReportElementName": "proof:Equity",
      "Language": "en",
      "LabelRole": "OriginallyStated",
      "Label": "Equity, Origionally Stated"
    },
    {
      "ReportElementName": "proof:Equity",
      "Language": "en",
      "LabelRole": "Restated",
      "Label": "Equity, Restated"
    },
    {
      "ReportElementName": "proof:Equity",
      "Language": "en",
      "LabelRole": "PeriodStart",
      "Label": "Equity, Beginning Balance"
    },
    {
      "ReportElementName": "proof:DistributionsToOwners",
      "Language": "en",
      "LabelRole": "Negated",
      "Label": "(Distributions to Owners)"
    },
    {
      "ReportElementName": "proof:Equity",
      "Language": "en",
      "LabelRole": "PeriodEnd",
      "Label": "Equity, Ending Balance"
    },
    {
      "ReportElementName": "proof:NonvestedFairValue",
      "Language": "en",
      "LabelRole": "PeriodStart",
      "Label": "Nonvested Fair Value, Beginning Balance"
    },
    {
      "ReportElementName": "proof:NonvestedFairValue",
      "Language": "en",
      "LabelRole": "PeriodEnd",
      "Label": "Nonvested Fair Value, Ending Balance"
    }
  ],
  "References": [],
  "Structures": [
    {
      "StructureIdentifier": "BalanceSheet",
      "StructureTitle": "01-Balance Sheet",
      "Sequence": "11"
    },
    {
      "StructureIdentifier": "NetAssets",
      "StructureTitle": "02-Net Assets",
      "Sequence": "7"
    },
    {
      "StructureIdentifier": "ComprehensiveIncome",
      "StructureTitle": "03-Income Statement",
      "Sequence": "5"
    },
    {
      "StructureIdentifier": "ComprehensiveIncome2",
      "StructureTitle": "04-Income Statement (Alternative)",
      "Sequence": "8"
    },
    {
      "StructureIdentifier": "ComprehensiveIncome3",
      "StructureTitle": "05-Comprehensive Income",
      "Sequence": "6"
    },
    {
      "StructureIdentifier": "CashFlow",
      "StructureTitle": "06-Cash Flow",
      "Sequence": "4"
    },
    {
      "StructureIdentifier": "PriorPeriodErrors",
      "StructureTitle": "07-Prior Period Errors",
      "Sequence": "2"
    },
    {
      "StructureIdentifier": "PriorPeriodErrors2",
      "StructureTitle": "08-Prior Period Errors (Alternative)",
      "Sequence": "13"
    },
    {
      "StructureIdentifier": "ChangesInEquity",
      "StructureTitle": "09-Changes in Equity",
      "Sequence": "1"
    },
    {
      "StructureIdentifier": "Policies",
      "StructureTitle": "10-Policies",
      "Sequence": "9"
    },
    {
      "StructureIdentifier": "VarianceAnalysis",
      "StructureTitle": "11-Variance Analysis",
      "Sequence": "10"
    },
    {
      "StructureIdentifier": "SegmentRevenues",
      "StructureTitle": "12-Segment Revenues",
      "Sequence": "12"
    },
    {
      "StructureIdentifier": "StockPlanActivity",
      "StructureTitle": "13-Stock Plan Activity",
      "Sequence": "14"
    },
    {
      "StructureIdentifier": "FinancialHighlights",
      "StructureTitle": "14-Financial Highlights",
      "Sequence": "3"
    }
  ],
  "Associations": [
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:BalanceSheetHypercube",
      "Sequence": "5"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:BalanceSheetLineItems",
      "Sequence": "1"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:AssetsRollUp",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:AssetsRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:CurrentAssets",
      "Sequence": "3"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:Assets",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:CurrentAssets",
      "CalculationPolarity": "Add",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:CurrentAssets",
      "Sequence": "6"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:AssetsRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NoncurrentAssets",
      "Sequence": "4"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:Assets",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:NoncurrentAssets",
      "CalculationPolarity": "Add",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NoncurrentAssets",
      "Sequence": "7"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Assets",
      "Sequence": "3"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:AssetsRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Assets",
      "Sequence": "5"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssets",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Assets",
      "CalculationPolarity": "Add",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Assets",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Assets",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Assets",
      "Sequence": "5"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:LiabilitiesAndEquityRollUp",
      "Sequence": "6"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:LiabilitiesAndEquityRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:LiabilitiesRollUp",
      "Sequence": "7"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:LiabilitiesRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:CurrentLiabilities",
      "Sequence": "8"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:Liabilities",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:CurrentLiabilities",
      "CalculationPolarity": "Add",
      "Sequence": "5"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:CurrentLiabilities",
      "Sequence": "8"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:LiabilitiesRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NoncurrentLiabilities",
      "Sequence": "9"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:Liabilities",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:NoncurrentLiabilities",
      "CalculationPolarity": "Add",
      "Sequence": "6"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NoncurrentLiabilities",
      "Sequence": "9"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:LiabilitiesRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Liabilities",
      "Sequence": "10"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:LiabilitiesAndEquity",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Liabilities",
      "CalculationPolarity": "Add",
      "Sequence": "3"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssets",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Liabilities",
      "CalculationPolarity": "Subtract",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Liabilities",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Liabilities",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:LiabilitiesAndEquityRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:EquityRollUp",
      "Sequence": "11"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:EquityRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:EquityAttributableToControllingInterests",
      "Sequence": "12"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:Equity",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:EquityAttributableToControllingInterests",
      "CalculationPolarity": "Add",
      "Sequence": "7"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:EquityAttributableToControllingInterests",
      "Sequence": "10"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:EquityRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:EquityAttributableToNoncontrollingInterests",
      "Sequence": "13"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:Equity",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:EquityAttributableToNoncontrollingInterests",
      "CalculationPolarity": "Add",
      "Sequence": "8"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:EquityAttributableToNoncontrollingInterests",
      "Sequence": "11"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:EquityRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Equity",
      "Sequence": "14"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:PriorPeriodErrorsAdjustment",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Equity",
      "Sequence": "8"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:LiabilitiesAndEquity",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Equity",
      "CalculationPolarity": "Add",
      "Sequence": "4"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Equity",
      "Sequence": "4"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Equity",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:PriorPeriodErrorsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Equity",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Equity",
      "Sequence": "11"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:LiabilitiesAndEquityRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:LiabilitiesAndEquity",
      "Sequence": "15"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "BalanceSheet",
      "AssociationFromName": "proof:BalanceSheetLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:LiabilitiesAndEquity",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:NetAssetsHypercube",
      "Sequence": "4"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetAssetsLineItems",
      "Sequence": "1"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetAssetsRollUp",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetAssets",
      "Sequence": "5"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetAssets",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:ComprehensiveIncomeStatementHypercube",
      "Sequence": "4"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:ComprehensiveIncomeStatementHypercube",
      "Sequence": "4"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:ComprehensiveIncomeStatementHypercube",
      "Sequence": "4"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncomeStatementLineItems",
      "Sequence": "1"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncomeStatementLineItems",
      "Sequence": "11"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncomeStatementLineItems",
      "Sequence": "1"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncomeRollUp",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncomeRollUp",
      "Sequence": "12"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncomeRollUp",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsSet",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Revenues",
      "Sequence": "27"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Revenues",
      "Sequence": "3"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Revenues",
      "Sequence": "27"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentRevenuesSet",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Revenues",
      "Sequence": "62"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Revenues",
      "CalculationPolarity": "Add",
      "Sequence": "1"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Revenues",
      "CalculationPolarity": "Add",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Revenues",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Revenues",
      "Sequence": "27"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Revenues",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentRevenuesLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Revenues",
      "Sequence": "55"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Expenses",
      "CalculationPolarity": "Subtract",
      "Sequence": "2"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Expenses",
      "CalculationPolarity": "Subtract",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Expenses",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Expenses",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Gains",
      "Sequence": "5"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Gains",
      "Sequence": "29"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Gains",
      "CalculationPolarity": "Add",
      "Sequence": "3"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Gains",
      "CalculationPolarity": "Add",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Gains",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Gains",
      "Sequence": "3"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Losses",
      "CalculationPolarity": "Subtract",
      "Sequence": "4"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:Losses",
      "CalculationPolarity": "Subtract",
      "Sequence": "4"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Losses",
      "Sequence": "5"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Losses",
      "Sequence": "4"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetIncome",
      "Sequence": "7"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetIncome",
      "Sequence": "13"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetIncome",
      "Sequence": "5"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetIncome",
      "Sequence": "31"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:NetIncome",
      "CalculationPolarity": "Add",
      "Sequence": "16"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetIncome",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetIncome",
      "Sequence": "6"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetIncome",
      "Sequence": "5"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetIncome",
      "Sequence": "1"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:IncomeFromNormalActivitiesOfEntity",
      "Sequence": "3"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:IncomeFromNormalActivitiesOfEntity",
      "CalculationPolarity": "Add",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:IncomeFromNormalActivitiesOfEntity",
      "Sequence": "1"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:IncomeFromPeripheralOrIncidentalTransactionsOfEntity",
      "Sequence": "4"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:NetIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:IncomeFromPeripheralOrIncidentalTransactionsOfEntity",
      "CalculationPolarity": "Add",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome2",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:IncomeFromPeripheralOrIncidentalTransactionsOfEntity",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:OtherComprehensiveIncome",
      "Sequence": "14"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncome",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:OtherComprehensiveIncome",
      "CalculationPolarity": "Add",
      "Sequence": "17"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:OtherComprehensiveIncome",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityRollForward",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncome",
      "Sequence": "54"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsSet",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncome",
      "Sequence": "28"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ComprehensiveIncome",
      "Sequence": "15"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:ComprehensiveIncome",
      "Sequence": "12"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:ComprehensiveIncome",
      "Sequence": "28"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ComprehensiveIncome3",
      "AssociationFromName": "proof:ComprehensiveIncomeStatementLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:ComprehensiveIncome",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:CashFlowHypercube",
      "Sequence": "5"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:CashFlowLineItems",
      "Sequence": "1"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetCashFlowRollUp",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:NetCashFlowRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetCashFlowOperatingActivities",
      "Sequence": "3"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:NetCashFlow",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:NetCashFlowOperatingActivities",
      "CalculationPolarity": "Add",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetCashFlowOperatingActivities",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:NetCashFlowRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetCashFlowInvestingActivities",
      "Sequence": "4"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:NetCashFlow",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:NetCashFlowInvestingActivities",
      "CalculationPolarity": "Add",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetCashFlowInvestingActivities",
      "Sequence": "3"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:NetCashFlowRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetCashFlowFinancingActivities",
      "Sequence": "5"
    },
    {
      "StructureType": "Calculation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:NetCashFlow",
      "AssociationRole": "Total-Item",
      "AssociationToName": "proof:NetCashFlowFinancingActivities",
      "CalculationPolarity": "Add",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetCashFlowFinancingActivities",
      "Sequence": "4"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:NetCashFlowRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetCashFlow",
      "Sequence": "6"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:AssetsRollForward",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NetCashFlow",
      "Sequence": "9"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NetCashFlow",
      "Sequence": "1"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:CashFlowLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:AssetsRollForward",
      "Sequence": "7"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:PriorPeriodErrorsHypercube",
      "Sequence": "4"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:PriorPeriodErrorsLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:PriorPeriodErrorsHypercube",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ReportDateAxis",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsHypercube",
      "AssociationRole": "Hypercube-Dimension",
      "AssociationToName": "proof:ReportDateAxis",
      "Sequence": "5"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:ReportDateAxis",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:CurrentReportMember",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:ReportDateAxis",
      "AssociationRole": "Dimension-RootMember",
      "AssociationToName": "proof:CurrentReportMember",
      "Sequence": "6"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:ReportDateAxis",
      "AssociationRole": "Dimension-Default",
      "AssociationToName": "proof:CurrentReportMember",
      "Sequence": "7"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:CurrentReportMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:PriorReportMember",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:CurrentReportMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:PriorReportMember",
      "Sequence": "8"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:PriorPeriodErrorsLineItems",
      "Sequence": "4"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:PriorPeriodErrorsHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:PriorPeriodErrorsLineItems",
      "Sequence": "6"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:PriorPeriodErrorsAdjustment",
      "Sequence": "5"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:PriorPeriodErrorsLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:PriorPeriodErrorsAdjustment",
      "Sequence": "7"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsAdjustment",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ChangesInAccountingPolicy",
      "Sequence": "7"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:ChangesInAccountingPolicy",
      "Sequence": "2"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsAdjustment",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:CorrectionOfAnError",
      "Sequence": "8"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:CorrectionOfAnError",
      "Sequence": "3"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:PriorPeriodErrorsHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:RestatementAxis",
      "Sequence": "1"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:PriorPeriodErrorsHypercube",
      "AssociationRole": "Hypercube-Dimension",
      "AssociationToName": "proof:RestatementAxis",
      "Sequence": "3"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatementAxis",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:RestatedMember",
      "Sequence": "2"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatementAxis",
      "AssociationRole": "Dimension-RootMember",
      "AssociationToName": "proof:RestatedMember",
      "Sequence": "4"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatementAxis",
      "AssociationRole": "Dimension-Default",
      "AssociationToName": "proof:RestatedMember",
      "Sequence": "5"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatedMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:PreviouslyStatedMember",
      "Sequence": "3"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatedMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:PreviouslyStatedMember",
      "Sequence": "8"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatedMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ChangesInAccountingPolicyMember",
      "Sequence": "4"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatedMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:ChangesInAccountingPolicyMember",
      "Sequence": "6"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatedMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:CorrectionsOfAccountingErrorsMember",
      "Sequence": "5"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "PriorPeriodErrors2",
      "AssociationFromName": "proof:RestatedMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:CorrectionsOfAccountingErrorsMember",
      "Sequence": "7"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:ChangesInEquityHypercube",
      "Sequence": "15"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ChangesInEquityLineItems",
      "Sequence": "51"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ChangesInEquityRollForward",
      "Sequence": "52"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityRollForward",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:InvestmentsByOwners",
      "Sequence": "55"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:InvestmentsByOwners",
      "Sequence": "14"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsSet",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:DistributionsToOwners",
      "Sequence": "29"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:DistributionsToOwners",
      "Sequence": "16"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:DistributionsToOwners",
      "Sequence": "29"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "Policies",
      "AssociationFromName": "proof:PoliciesLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:PoliciesHypercube",
      "Sequence": "45"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "Policies",
      "AssociationFromName": "proof:PoliciesHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:PoliciesLineItems",
      "Sequence": "41"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "Policies",
      "AssociationFromName": "proof:PoliciesLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:BasisOfReportingTextBlock",
      "Sequence": "42"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "Policies",
      "AssociationFromName": "proof:PoliciesLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:BasisOfReportingTextBlock",
      "Sequence": "42"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "Policies",
      "AssociationFromName": "proof:PoliciesLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NatureOfOperationsTextBlock",
      "Sequence": "43"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "Policies",
      "AssociationFromName": "proof:PoliciesLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NatureOfOperationsTextBlock",
      "Sequence": "43"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "Policies",
      "AssociationFromName": "proof:PoliciesLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:RevenueRecognitionPolicyTextBlock",
      "Sequence": "44"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "Policies",
      "AssociationFromName": "proof:PoliciesLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:RevenueRecognitionPolicyTextBlock",
      "Sequence": "44"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:VarianceAnalysisHypercube",
      "Sequence": "6"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ScenarioAxis",
      "Sequence": "21"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisHypercube",
      "AssociationRole": "Hypercube-Dimension",
      "AssociationToName": "proof:ScenarioAxis",
      "Sequence": "7"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:ScenarioAxis",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:ActualMember",
      "Sequence": "22"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:ScenarioAxis",
      "AssociationRole": "Dimension-RootMember",
      "AssociationToName": "proof:ActualMember",
      "Sequence": "8"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:ScenarioAxis",
      "AssociationRole": "Dimension-Default",
      "AssociationToName": "proof:ActualMember",
      "Sequence": "11"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:ActualMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:VarianceMember",
      "Sequence": "23"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:ActualMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:VarianceMember",
      "Sequence": "10"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:ActualMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:BudgetedMember",
      "Sequence": "24"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:ActualMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:BudgetedMember",
      "Sequence": "9"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:VarianceAnalysisLineItems",
      "Sequence": "25"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:VarianceAnalysisRollUp",
      "Sequence": "26"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentRevenuesLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:SegmentRevenuesHypercube",
      "Sequence": "56"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentRevenuesHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:SegmentsAxis",
      "Sequence": "55"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentRevenuesHypercube",
      "AssociationRole": "Hypercube-Dimension",
      "AssociationToName": "proof:SegmentsAxis",
      "Sequence": "57"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentsAxis",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:AllSegmentsMember",
      "Sequence": "56"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentsAxis",
      "AssociationRole": "Dimension-RootMember",
      "AssociationToName": "proof:AllSegmentsMember",
      "Sequence": "58"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentsAxis",
      "AssociationRole": "Dimension-Default",
      "AssociationToName": "proof:AllSegmentsMember",
      "Sequence": "59"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:AllSegmentsMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:SegmentAlphaMember",
      "Sequence": "57"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:AllSegmentsMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:SegmentAlphaMember",
      "Sequence": "60"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:AllSegmentsMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:SegmentBravoMember",
      "Sequence": "58"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:AllSegmentsMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:SegmentBravoMember",
      "Sequence": "61"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:AllSegmentsMember",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:SegmentCharlieMember",
      "Sequence": "59"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:AllSegmentsMember",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:SegmentCharlieMember",
      "Sequence": "62"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentRevenuesHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:SegmentRevenuesLineItems",
      "Sequence": "60"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "SegmentRevenues",
      "AssociationFromName": "proof:SegmentRevenuesLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:SegmentRevenuesSet",
      "Sequence": "61"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:WeightedAverageGrantDateFairValueHypercube",
      "Sequence": "24"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:WeightedAverageGrantDateFairValueLineItems",
      "Sequence": "12"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:WeightedAverageGrantDateFairValueRollForwardInfo",
      "Sequence": "13"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:NonvestedFairValue",
      "Sequence": "20"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueRollForwardInfo",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Granted",
      "Sequence": "15"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Granted",
      "Sequence": "21"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueRollForwardInfo",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Vested",
      "Sequence": "16"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Vested",
      "Sequence": "22"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueRollForwardInfo",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Forfeited",
      "Sequence": "17"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueLineItems",
      "AssociationRole": "Member-Member",
      "AssociationToName": "proof:Forfeited",
      "Sequence": "23"
    },
    {
      "StructureType": "Definition",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsLineItems",
      "AssociationRole": "LineItems-Hypercube",
      "AssociationToName": "proof:FinancialHighlightsHypercube",
      "Sequence": "30"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsHypercube",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:FinancialHighlightsLineItems",
      "Sequence": "25"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "FinancialHighlights",
      "AssociationFromName": "proof:FinancialHighlightsLineItems",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:FinancialHighlightsSet",
      "Sequence": "26"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "NetAssets",
      "AssociationFromName": "proof:NetAssetsRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Liabilities",
      "PreferredLabelRole": "Negated",
      "Sequence": "4"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Expenses",
      "PreferredLabelRole": "Negated",
      "Sequence": "4"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Expenses",
      "PreferredLabelRole": "Negated",
      "Sequence": "28"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ComprehensiveIncome",
      "AssociationFromName": "proof:ComprehensiveIncomeRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Losses",
      "PreferredLabelRole": "Negated",
      "Sequence": "6"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "VarianceAnalysis",
      "AssociationFromName": "proof:VarianceAnalysisRollUp",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Losses",
      "PreferredLabelRole": "Negated",
      "Sequence": "30"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:AssetsRollForward",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Assets",
      "PreferredLabelRole": "PeriodStart",
      "Sequence": "8"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "CashFlow",
      "AssociationFromName": "proof:AssetsRollForward",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Assets",
      "PreferredLabelRole": "PeriodEnd",
      "Sequence": "10"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsAdjustment",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Equity",
      "PreferredLabelRole": "OriginallyStated",
      "Sequence": "6"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "PriorPeriodErrors",
      "AssociationFromName": "proof:PriorPeriodErrorsAdjustment",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Equity",
      "PreferredLabelRole": "Restated",
      "Sequence": "9"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityRollForward",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Equity",
      "PreferredLabelRole": "PeriodStart",
      "Sequence": "53"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityRollForward",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:DistributionsToOwners",
      "PreferredLabelRole": "Negated",
      "Sequence": "56"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "ChangesInEquity",
      "AssociationFromName": "proof:ChangesInEquityRollForward",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:Equity",
      "PreferredLabelRole": "PeriodEnd",
      "Sequence": "57"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueRollForwardInfo",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NonvestedFairValue",
      "PreferredLabelRole": "PeriodStart",
      "Sequence": "14"
    },
    {
      "StructureType": "Presentation",
      "StructureIdentifier": "StockPlanActivity",
      "AssociationFromName": "proof:WeightedAverageGrantDateFairValueRollForwardInfo",
      "AssociationRole": "Parent-Child",
      "AssociationToName": "proof:NonvestedFairValue",
      "PreferredLabelRole": "PeriodEnd",
      "Sequence": "18"
    }
  ],
  "Rules-Consistency": [
    {
      "RuleType": "ConsistencyRule",
      "RuleCode": "Arithmetic_NA01",
      "Rule": "$NetAssets = ($Assets - $Liabilities)",
      "StructureIdentifier": "NetAssets",
      "ConceptAspect": "proof:NetAssets"
    },
    {
      "RuleType": "ConsistencyRule",
      "RuleCode": "Arithmetic_BS01",
      "Rule": "$Assets = ($Liabilities + $Equity)",
      "StructureIdentifier": "BalanceSheet",
      "ConceptAspect": "proof:Assets"
    }
  ],
  "Rules-RollForward": [
    {
      "RuleType": "RollForwardRule",
      "RuleCode": "RollForward_SHE01",
      "Rule": "$Equity_BalanceStart + $ComprehensiveIncome + $InvestmentsByOwners - $DistributionsToOwners = $Equity_BalanceEnd",
      "StructureIdentifier": "ChangesInEquity",
      "ConceptAspect": "proof:Equity"
    },
    {
      "RuleType": "RollForwardRule",
      "RuleCode": "RollForward_CF01",
      "Rule": "$Assets_BalanceStart + $NetCashFlow = $Assets_BalanceEnd",
      "StructureIdentifier": "CashFlow",
      "ConceptAspect": "proof:Assets"
    }
  ],
  "Rules-MemberAggregation": [
    {
      "RuleType": "MemberAggregationRule",
      "RuleCode": "MemberAggregation_PPA",
      "Rule": "$Total eq sum($Each)",
      "StructureIdentifier": "PriorPeriodErrors2",
      "ConceptAspect": "proof:Equity",
      "Dimension": "proof:RestatementAxis"
    },
    {
      "RuleType": "MemberAggregationRule",
      "RuleCode": "MemberAggregation_MA1",
      "Rule": "$Total eq sum($Each)",
      "StructureIdentifier": "SegmentRevenues",
      "ConceptAspect": "proof:Revenues",
      "Dimension": "proof:SegmentsAxis"
    }
  ],
  "Rules-Adjustment": [
    {
      "RuleType": "AdjustmentRule",
      "RuleCode": "Adjustment_ADJ01",
      "Rule": "$Restated = ($OrigionallyStated + $CorrectionOfAnError + $ChangesInAccountingPolicy)",
      "StructureIdentifier": "PriorPeriodErrors",
      "ConceptAspect": "proof:Equity",
      "Dimension": "proof:ReportDateAxis",
      "MemberPrior": "proof:PriorReportMember",
      "MemberCurrent": "proof:CurrentReportMember"
    }
  ],
  "Rules-Variance": [
    {
      "RuleType": "VarianceRule",
      "RuleCode": "Variance_Revenues",
      "Rule": "$Actual = ($Budget + $Variance)",
      "StructureIdentifier": "VarianceAnalysis",
      "ConceptAspect": "proof:Revenues",
      "Dimension": "proof:ScenarioAxis",
      "MemberActual": "proof:ActualMember",
      "MemberBudget": "proof:BudgetedMember",
      "MemberVariance": "proof:VarianceMember"
    },
    {
      "RuleType": "VarianceRule",
      "RuleCode": "Variance_Expenses",
      "Rule": "$Actual = ($Budget + $Variance)",
      "StructureIdentifier": "VarianceAnalysis",
      "ConceptAspect": "proof:Expenses",
      "Dimension": "proof:ScenarioAxis",
      "MemberActual": "proof:ActualMember",
      "MemberBudget": "proof:BudgetedMember",
      "MemberVariance": "proof:VarianceMember"
    },
    {
      "RuleType": "VarianceRule",
      "RuleCode": "Variance_Gains",
      "Rule": "$Actual = ($Budget + $Variance)",
      "StructureIdentifier": "VarianceAnalysis",
      "ConceptAspect": "proof:Gains",
      "Dimension": "proof:ScenarioAxis",
      "MemberActual": "proof:ActualMember",
      "MemberBudget": "proof:BudgetedMember",
      "MemberVariance": "proof:VarianceMember"
    },
    {
      "RuleType": "VarianceRule",
      "RuleCode": "Variance_Losses",
      "Rule": "$Actual = ($Budget + $Variance)",
      "StructureIdentifier": "VarianceAnalysis",
      "ConceptAspect": "proof:Losses",
      "Dimension": "proof:ScenarioAxis",
      "MemberActual": "proof:ActualMember",
      "MemberBudget": "proof:BudgetedMember",
      "MemberVariance": "proof:VarianceMember"
    },
    {
      "RuleType": "VarianceRule",
      "RuleCode": "Variance_NetIncome",
      "Rule": "$Actual = ($Budget + $Variance)",
      "StructureIdentifier": "VarianceAnalysis",
      "ConceptAspect": "proof:NetIncome",
      "Dimension": "proof:ScenarioAxis",
      "MemberActual": "proof:ActualMember",
      "MemberBudget": "proof:BudgetedMember",
      "MemberVariance": "proof:VarianceMember"
    }
  ],
  "Rules-Nonstandard": [],
  "Facts": [
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:CurrentAssets",
      "FactValue": "500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "2"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:NoncurrentAssets",
      "FactValue": "3000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "4"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:Assets",
      "FactValue": "3500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "98"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:CurrentLiabilities",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "10"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:NoncurrentLiabilities",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "12"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:Liabilities",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "82"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:EquityAttributableToControllingInterests",
      "FactValue": "3000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "18"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:EquityAttributableToNoncontrollingInterests",
      "FactValue": "500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "20"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:Equity",
      "FactValue": "3500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "120"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:LiabilitiesAndEquity",
      "FactValue": "3500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "26"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:NetAssets",
      "FactValue": "3500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "27"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Revenues",
      "FactValue": "7000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "33"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Expenses",
      "FactValue": "3000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "86"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Gains",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "41"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Losses",
      "FactValue": "2000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "90"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:NetIncome",
      "FactValue": "3000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "50"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:IncomeFromNormalActivitiesOfEntity",
      "FactValue": "2000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "52"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:IncomeFromPeripheralOrIncidentalTransactionsOfEntity",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "54"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:OtherComprehensiveIncome",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "56"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:ComprehensiveIncome",
      "FactValue": "3000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "59"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:NetCashFlowOperatingActivities",
      "FactValue": "1500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "61"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:NetCashFlowInvestingActivities",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "63"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:NetCashFlowFinancingActivities",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "65"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:NetCashFlow",
      "FactValue": "3500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "66"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:InvestmentsByOwners",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "69"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:DistributionsToOwners",
      "FactValue": "500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "115"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:BasisOfReportingTextBlock",
      "FactValue": "<p>Duis fermentum. Nullam dui orci, scelerisque porttitor, volutpat a, porttitor a, enim. Sed lobortis. Maecenas scelerisque ullamcorper libero. Aliquam porta leo imperdiet pede. In semper, elit vel elementum auctor, lectus purus rhoncus arcu, lacinia sollicitudin justo odio et nunc. Phasellus sagittis fringilla risus. Curabitur iaculis sagittis orci. Ut malesuada libero nec nulla molestie vestibulum. Suspendisse lectus massa, ullamcorper at, tincidunt eget, bibendum vel, risus. Curabitur imperdiet. Suspendisse accumsan, arcu vel ornare interdum, magna tellus porta mauris, in porta mi lacus sodales felis. Pellentesque dapibus, leo non sollicitudin consequat, lectus orci fringilla felis, non interdum leo libero sed augue. Sed magna. Maecenas ante ipsum, congue ut, sodales a, pulvinar ut, dui. Suspendisse mauris massa, sollicitudin et, hendrerit eget, placerat id, orci. Donec molestie magna. Sed mauris. Nulla facilisi. Fusce tristique posuere ipsum. Nulla facilisi. Aliquam viverra risus vitae ante. Sed rhoncus mi in wisi. Nullam nibh dui, molestie vitae, imperdiet non, ornare at, elit. Aenean nec justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sodales.</p>",
      "Sequence": "72"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:NatureOfOperationsTextBlock",
      "FactValue": "<p>Curabitur iaculis sagittis orci. Ut malesuada libero nec nulla molestie vestibulum. Suspendisse lectus massa, ullamcorper at, tincidunt eget, bibendum vel, risus. Curabitur imperdiet. Suspendisse accumsan, arcu vel ornare interdum, magna tellus porta mauris, in porta mi lacus sodales felis. Pellentesque dapibus, leo non sollicitudin consequat, lectus orci fringilla felis, non interdum leo libero sed augue.</p>",
      "Sequence": "73"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:RevenueRecognitionPolicyTextBlock",
      "FactValue": "<p>Duis fermentum. Nullam dui orci, scelerisque porttitor, volutpat a, porttitor a, enim. Sed lobortis. Maecenas scelerisque ullamcorper libero. Aliquam porta leo imperdiet pede. In semper, elit vel elementum auctor, lectus purus rhoncus arcu, lacinia sollicitudin justo odio et nunc. Phasellus sagittis fringilla risus. Curabitur iaculis sagittis orci. Ut malesuada libero nec nulla molestie vestibulum. Suspendisse lectus massa, ullamcorper at, tincidunt eget, bibendum vel, risus. Curabitur imperdiet. Suspendisse accumsan, arcu vel ornare interdum, magna tellus porta mauris, in porta mi lacus sodales felis. Pellentesque dapibus, leo non sollicitudin consequat, lectus orci fringilla felis, non interdum leo libero sed augue. Sed magna. Maecenas ante ipsum, congue ut, sodales a, pulvinar ut, dui. Suspendisse mauris massa, sollicitudin et, hendrerit eget, placerat id, orci. Donec molestie magna. Sed mauris. Nulla facilisi. Fusce tristique posuere ipsum. Nulla facilisi. Aliquam viverra risus vitae ante. Sed rhoncus mi in wisi. Nullam nibh dui, molestie vitae, imperdiet non, ornare at, elit. Aenean nec justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sodales.</p>",
      "Sequence": "74"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-12-31",
      "ConceptAspect": "proof:NonvestedFairValue",
      "FactValue": "36.92",
      "Units": "iso4217:USD/shares",
      "Rounding": "2",
      "Sequence": "122"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Granted",
      "FactValue": "41.51",
      "Units": "iso4217:USD/shares",
      "Rounding": "2",
      "Sequence": "76"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Vested",
      "FactValue": "30.92",
      "Units": "iso4217:USD/shares",
      "Rounding": "2",
      "Sequence": "77"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Forfeited",
      "FactValue": "35.93",
      "Units": "iso4217:USD/shares",
      "Rounding": "2",
      "Sequence": "78"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:Assets",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "131"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:Equity",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "129"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:NonvestedFairValue",
      "FactValue": "32.72",
      "Units": "iso4217:USD/shares",
      "Rounding": "2",
      "Sequence": "142"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Revenues",
      "FactValue": "2000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACTe46c43b0",
      "Sequence": "128"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Revenues",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT596e4a17",
      "Sequence": "132"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Revenues",
      "FactValue": "6000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACTe4d3052f",
      "Sequence": "133"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Expenses",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACTec885b75",
      "Sequence": "134"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Expenses",
      "FactValue": "2000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT35ae1878",
      "Sequence": "135"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Gains",
      "FactValue": "250",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT87e39e62",
      "Sequence": "136"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Gains",
      "FactValue": "750",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT30fe5f66",
      "Sequence": "137"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Losses",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT8f61e67b",
      "Sequence": "138"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Losses",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT387c277f",
      "Sequence": "139"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:NetIncome",
      "FactValue": "-750",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT5647a576",
      "Sequence": "140"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:NetIncome",
      "FactValue": "3750",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT5317e268",
      "Sequence": "141"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:Equity",
      "FactValue": "2000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACTb6620c88",
      "Sequence": "155"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:Equity",
      "FactValue": "-1500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT19efa34c",
      "Sequence": "156"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:Equity",
      "FactValue": "-500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT9df83356",
      "Sequence": "157"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Revenues",
      "FactValue": "1000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACTf1d21e83",
      "Sequence": "159"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2022-01-01 | 2022-12-31",
      "ConceptAspect": "proof:Revenues",
      "FactValue": "4000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "FACT115e82ac",
      "Sequence": "160"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:CurrentAssets",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "162"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:NoncurrentAssets",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "163"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:CurrentLiabilities",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "179"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:NoncurrentLiabilities",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "180"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:Liabilities",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "181"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:EquityAttributableToControllingInterests",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "182"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:EquityAttributableToNoncontrollingInterests",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "183"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:LiabilitiesAndEquity",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "184"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:NetAssets",
      "FactValue": "0",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "185"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:CorrectionOfAnError",
      "FactValue": "-500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "191"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:ChangesInAccountingPolicy",
      "FactValue": "-1500",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "Sequence": "190"
    },
    {
      "ReportingEntityAspect": "GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442",
      "CalendarPeriodAspect": "2021-12-31",
      "ConceptAspect": "proof:Equity",
      "FactValue": "2000",
      "Units": "iso4217:USD",
      "Rounding": "INF",
      "FactID": "MANUAL",
      "Sequence": "999"
    }
  ],
  "Facts-Dimensions": [
    {
      "FactID": "FACTe46c43b0",
      "Dimension": "proof:SegmentsAxis",
      "Member": "proof:SegmentCharlieMember",
      "Sequence": "1"
    },
    {
      "FactID": "FACT596e4a17",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:BudgetedMember",
      "Sequence": "2"
    },
    {
      "FactID": "FACTe4d3052f",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:VarianceMember",
      "Sequence": "3"
    },
    {
      "FactID": "FACTec885b75",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:BudgetedMember",
      "Sequence": "4"
    },
    {
      "FactID": "FACT35ae1878",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:VarianceMember",
      "Sequence": "5"
    },
    {
      "FactID": "FACT87e39e62",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:BudgetedMember",
      "Sequence": "6"
    },
    {
      "FactID": "FACT30fe5f66",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:VarianceMember",
      "Sequence": "7"
    },
    {
      "FactID": "FACT8f61e67b",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:BudgetedMember",
      "Sequence": "8"
    },
    {
      "FactID": "FACT387c277f",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:VarianceMember",
      "Sequence": "9"
    },
    {
      "FactID": "FACT5647a576",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:BudgetedMember",
      "Sequence": "10"
    },
    {
      "FactID": "FACT5317e268",
      "Dimension": "proof:ScenarioAxis",
      "Member": "proof:VarianceMember",
      "Sequence": "11"
    },
    {
      "FactID": "FACTb6620c88",
      "Dimension": "proof:RestatementAxis",
      "Member": "proof:PreviouslyStatedMember",
      "Sequence": "12"
    },
    {
      "FactID": "FACT19efa34c",
      "Dimension": "proof:RestatementAxis",
      "Member": "proof:ChangesInAccountingPolicyMember",
      "Sequence": "13"
    },
    {
      "FactID": "FACT9df83356",
      "Dimension": "proof:RestatementAxis",
      "Member": "proof:CorrectionsOfAccountingErrorsMember",
      "Sequence": "14"
    },
    {
      "FactID": "FACTf1d21e83",
      "Dimension": "proof:SegmentsAxis",
      "Member": "proof:SegmentAlphaMember",
      "Sequence": "15"
    },
    {
      "FactID": "FACT115e82ac",
      "Dimension": "proof:SegmentsAxis",
      "Member": "proof:SegmentBravoMember",
      "Sequence": "16"
    },
    {
      "FactID": "MANUAL",
      "Dimension": "proof:ReportDateAxis",
      "Member": "proof:PriorReportMember",
      "Sequence": "17"
    }
  ],
  "Facts-Parenthetical": []
}

export default platinumProof;
