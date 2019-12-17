import { codes } from '@adgorithmics/graphql-errors';
import { Query } from './generated/graphql';
import { nameMap as defaultNameMap } from './generated/fields';

export type Deep<T> = {
    0: T;
    1: Deep<T[keyof T]>;
}[T extends string ? 0 : 1];

// stripped down version of https://github.com/NoHomey/bind-decorator
export function bind<T extends Function>(
    _target: object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> | void {
    return {
        configurable: true,
        get(this: T): T {
            const bound: T = descriptor.value?.bind(this);
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: true,
                writable: true,
            });
            return bound;
        },
    };
}

export function getFormattedFields(
    fields: Array<string> = [],
    nameMap: Record<string, string> = defaultNameMap,
) {
    return fields
        .map(field => {
            if (typeof field !== 'string') {
                throw new Error(
                    `Invalid field type "${typeof field}", needs to be string.`,
                );
            }
            const subfields = field.split('%');
            return (
                subfields
                    .map(subField => nameMap[subField] || subField)
                    .join('{') + '}'.repeat(subfields.length - 1)
            );
        })
        .join(' ');
}

export function pageQueryGenerator(
    name: keyof Query,
    fields: Array<string> = [],
    hasShowDeleted = false,
) {
    return `
query(
    $filter: FilterInput,
    $sort: SortInput,
    $first: Int,
    $last: Int,
    $after: String,
    $before: String,
    ${hasShowDeleted ? '$showDeleted: Boolean,' : ''}
) {
    ${name}(
        filter: $filter,
        sort: $sort,
        first: $first,
        last: $last,
        after: $after,
        before: $before,
        ${hasShowDeleted ? 'showDeleted: $showDeleted,' : ''}
    ) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
        }
        edges {
            node {
                ${getFormattedFields(fields)}
            }
        }
    }
}`;
}

export interface APIError {
    message?: string;
    extentions?: { code?: codes };
}

export class CinnamonError extends Error {
    raw?: { data?: unknown; errors?: Array<APIError> };

    constructor(
        message: string,
        raw?: { data?: unknown; errors?: Array<APIError> },
    ) {
        super(message);

        this.raw = raw;
    }
}
