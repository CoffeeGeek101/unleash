/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { RequestsPerSecondSchemaDataResultItem } from './requestsPerSecondSchemaDataResultItem';

export type RequestsPerSecondSchemaData = {
    resultType?: string;
    /** An array of values per metric. Each one represents a line in the graph labeled by its metric name */
    result?: RequestsPerSecondSchemaDataResultItem[];
};
