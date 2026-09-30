import type { AsyncAPIDocumentInterface } from '@asyncapi/parser'
import { isDdlApi } from '@alagishev/qubership-apihub-api-unifier'
import type { Realm } from '@alagishev/qubership-apihub-ddlapi'
import type { GraphApiSchema } from '@alagishev/qubership-apihub-graphapi'
import { isGraphApi } from '@alagishev/qubership-apihub-graphapi'
import { isObject } from '@alagishev/qubership-apihub-ui-shared/utils/objects'
import type { OpenAPIV3 } from 'openapi-types'

export function isOpenApiSpecification(specification: unknown): specification is OpenAPIV3.Document {
  if (!isObject(specification)) {
    return false
  }
  return 'openapi' in specification && typeof specification.openapi === 'string'
}

export function isGraphApiSpecification(specification: unknown): specification is GraphApiSchema {
  return isGraphApi(specification)
}

export function isAsyncApiSpecification(specification: unknown): specification is AsyncAPIDocumentInterface {
  if (!isObject(specification)) {
    return false
  }
  return 'asyncapi' in specification && typeof specification.asyncapi === 'string'
}

export function isDdlApiSpecification(specification: unknown): specification is Realm {
  return isDdlApi(specification)
}
