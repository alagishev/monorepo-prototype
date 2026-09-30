import { ApihubApiCompatibilityKind } from '../../consts'
import { ApiCompatibilityScopeFunction } from '@alagishev/qubership-apihub-api-diff'

export type ApiCompatibilityScopeFunctionFactory = (
  prevDocumentApiKind?: ApihubApiCompatibilityKind,
  currDocumentApiKind?: ApihubApiCompatibilityKind,
) => ApiCompatibilityScopeFunction
