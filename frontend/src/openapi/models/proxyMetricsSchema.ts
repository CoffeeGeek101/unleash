/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { ProxyMetricsSchemaBucket } from './proxyMetricsSchemaBucket';

export interface ProxyMetricsSchema {
    appName: string;
    instanceId: string;
    environment?: string;
    bucket: ProxyMetricsSchemaBucket;
}
