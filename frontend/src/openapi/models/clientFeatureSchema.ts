/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { FeatureStrategySchema } from './featureStrategySchema';
import type { VariantSchema } from './variantSchema';

export interface ClientFeatureSchema {
    name: string;
    type?: string;
    description?: string | null;
    createdAt?: string | null;
    lastSeenAt?: string | null;
    enabled: boolean;
    stale?: boolean;
    impressionData?: boolean | null;
    project?: string;
    strategies?: FeatureStrategySchema[];
    variants?: VariantSchema[] | null;
}
