import { type SchemaTypeDefinition } from 'sanity'

import {categoryType} from './categoryType'
import {postType} from './postType'
import {blockContentType} from './blockContentType'
import {authorType} from './authorType'
import {youTubeType} from './youTubeType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, postType, authorType,youTubeType, blockContentType],
}
