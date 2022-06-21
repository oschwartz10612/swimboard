// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Lane } = initSchema(schema);

export {
  Lane
};