import type { Diff } from '@alagishev/qubership-apihub-api-diff'
import { DiffType } from '@alagishev/qubership-apihub-api-diff'

export type NodeChange = Diff & { depth: number }
export type NodeChangesSummary = Set<DiffType>

export interface DiffRecord {
  [key: PropertyKey]: Diff | DiffRecord
}

export type DiffNodeMeta = {
  $nodeChange?: NodeChange
  $nodeChangesSummary: NodeChangesSummary
  $metaChanges?: DiffRecord
  $childrenChanges?: DiffRecord
  $nestedChanges?: DiffRecord
}

export type DiffNodeValue = {
  $changes?: DiffRecord
}

export type DiffMetaKeys = {
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}
