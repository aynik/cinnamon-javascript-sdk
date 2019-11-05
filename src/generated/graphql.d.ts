import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** ObjectId must be 24 bytes */
    ObjectId: string;
    /** Date strings must follow ISO 8601 specifications */
    DateISO: any;
    /** String must contain at least one character */
    NonEmptyString: string;
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: any;
    /**
     * Accepts a single filterObject (`{field: NonEmptyString!, operator: OPERATOR!,
     * value: [String]}`), a single array of filterObjects (creates an AND'ed query),
     * or a two dimentional array (each array is OR'ed) to produce your resource query.
     * Refer to the following JSON schema for more filter restriction details:
     *
     * ```json
     * {
     *   "anyOf": [
     *     {
     *       "type": "object",
     *       "$ref": "#/definitions/filterInput"
     *     },
     *     {
     *       "type": "array",
     *       "items": {
     *         "anyOf": [
     *           {
     *             "$ref": "#/definitions/filterInput"
     *           },
     *           {
     *             "type": "array",
     *             "items": {
     *               "$ref": "#/definitions/filterInput"
     *             }
     *           }
     *         ]
     *       }
     *     }
     *   ],
     *   "definitions": {
     *     "alphabeticString": {
     *       "type": "string",
     *       "pattern": "^[a-zA-Z]+$",
     *       "minLength": 1,
     *       "required": true
     *     },
     *     "filterInput": {
     *       "anyOf": [
     *         {
     *           "type": "object",
     *           "additionalProperties": false,
     *           "properties": {
     *             "field": {
     *               "$ref": "#/definitions/alphabeticString"
     *             },
     *             "operator": {
     *               "type": "string",
     *               "enum": [
     *                 "IN"
     *               ],
     *               "required": true
     *             },
     *             "value": {
     *               "type": "array",
     *               "items": {
     *                 "type": [
     *                   "string",
     *                   "integer",
     *                   "boolean"
     *                 ]
     *               },
     *               "require": true
     *             }
     *           }
     *         },
     *         {
     *           "type": "object",
     *           "additionalProperties": false,
     *           "properties": {
     *             "field": {
     *               "$ref": "#/definitions/alphabeticString"
     *             },
     *             "operator": {
     *               "type": "string",
     *               "enum": [
     *                 "EQUALS",
     *                 "NOT_EQUALS",
     *                 "CONTAINS",
     *                 "ICONTAINS",
     *                 "GT",
     *                 "GTE",
     *                 "LT",
     *                 "LTE"
     *               ],
     *               "required": true
     *             },
     *             "value": {
     *               "type": [
     *                 "string",
     *                 "integer",
     *                 "boolean"
     *               ],
     *               "required": true
     *             }
     *           }
     *         },
     *         {
     *           "type": "object",
     *           "additionalProperties": false,
     *           "properties": {
     *             "field": {
     *               "$ref": "#/definitions/alphabeticString"
     *             },
     *             "operator": {
     *               "type": "string",
     *               "enum": [
     *                 "IS_NULL"
     *               ],
     *               "required": true
     *             }
     *           }
     *         }
     *       ]
     *     }
     *   }
     * }
     * ```
     **/
    FilterInput: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
export declare enum AuthField {
    Id = "id",
    UserId = "userId",
    VendorId = "vendorId",
    OrganizationId = "organizationId",
    MarketplaceId = "marketplaceId",
    MediaChannelId = "mediaChannelId",
    CampaignTemplateId = "campaignTemplateId",
    ResourceId = "resourceId",
    CatalogId = "catalogId",
    ProductIds = "productIds"
}
export declare enum AuthLocation {
    Arg = "ARG",
    Input = "INPUT",
    Parent = "PARENT",
    Catalog = "CATALOG",
    Entitlement = "ENTITLEMENT",
    MarketingAd = "MARKETING_AD",
    MarketingCampaign = "MARKETING_CAMPAIGN",
    CampaignTemplate = "CAMPAIGN_TEMPLATE",
    MediaChannel = "MEDIA_CHANNEL",
    Product = "PRODUCT",
    Result = "RESULT",
    Vendor = "VENDOR"
}
export declare enum AuthPermission {
    Read = "READ",
    Write = "WRITE",
    Delete = "DELETE",
    ManageEntitlements = "MANAGE_ENTITLEMENTS"
}
export declare enum AuthType {
    Entitlement = "ENTITLEMENT",
    Vendor = "VENDOR",
    UserOnly = "USER_ONLY"
}
export declare enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
export declare type CampaignTemplate = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    description: Scalars['String'];
    platform: Platform;
    remoteId: Scalars['String'];
    marketplace: Marketplace;
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
};
export declare type CampaignTemplateMarketingCampaignsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type CampaignTemplateConnection = {
    edges?: Maybe<Array<Maybe<CampaignTemplateEdge>>>;
    pageInfo: PageInfo;
};
export declare type CampaignTemplateEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<CampaignTemplate>;
};
export declare type Catalog = {
    id: Scalars['ObjectId'];
    name: Scalars['NonEmptyString'];
    catalogType: CatalogType;
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    remoteId?: Maybe<Scalars['String']>;
    systemStatus: SystemStatus;
    remoteState: Scalars['JSONObject'];
    dataFeedId?: Maybe<Scalars['String']>;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    mediaChannel: MediaChannel;
    products?: Maybe<ProductConnection>;
};
export declare type CatalogProductsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type CatalogConnection = {
    edges?: Maybe<Array<Maybe<CatalogEdge>>>;
    pageInfo: PageInfo;
};
export declare type CatalogCreateInput = {
    name: Scalars['NonEmptyString'];
    mediaChannelId: Scalars['ObjectId'];
    catalogType: CatalogType;
};
export declare type CatalogEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Catalog>;
};
export declare type CatalogImportInput = {
    mediaChannelId: Scalars['ObjectId'];
    remoteId: Scalars['String'];
};
export declare enum CatalogType {
    Bookable = "bookable",
    Commerce = "commerce",
    Destinations = "destinations",
    Flights = "flights",
    HomeListings = "home_listings",
    Hotels = "hotels",
    OfflineCommerce = "offline_commerce",
    TicketedExperiences = "ticketed_experiences",
    TransactableItems = "transactable_items",
    Vehicles = "vehicles"
}
export declare type CatalogUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};
export declare type Deletion = {
    id: Scalars['String'];
};
export declare type Entitlement = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    user: User;
    type: EntitlementResourceTypeEnum;
    resource: EntitlementResource;
    permissions: Array<AuthPermission>;
};
export declare type EntitlementConnection = {
    edges?: Maybe<Array<Maybe<EntitlementEdge>>>;
    pageInfo: PageInfo;
};
export declare type EntitlementEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Entitlement>;
};
export declare type EntitlementInput = {
    userId: Scalars['ObjectId'];
    resourceId: Scalars['ObjectId'];
    permissions: Array<AuthPermission>;
};
export declare type EntitlementResource = {
    id: Scalars['ObjectId'];
    name: Scalars['NonEmptyString'];
    systemStatus: SystemStatus;
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
export declare enum EntitlementResourceTypeEnum {
    Marketplace = "Marketplace",
    Organization = "Organization",
    MediaChannel = "MediaChannel"
}
export declare type EntitlementUpdateInput = {
    permissions: Array<AuthPermission>;
};
export declare type MarketingAd = ResultResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    remoteId: Scalars['String'];
    preview: Scalars['String'];
    results?: Maybe<ResultConnection>;
    marketingCampaign: MarketingCampaign;
    vendor: Vendor;
};
export declare type MarketingAdResultsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type MarketingAdConnection = {
    edges?: Maybe<Array<Maybe<MarketingAdEdge>>>;
    pageInfo: PageInfo;
};
export declare type MarketingAdEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<MarketingAd>;
};
export declare type MarketingCampaign = ResultResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    status: MarketingCampaignStatus;
    marketingAds?: Maybe<MarketingAdConnection>;
    products?: Maybe<ProductConnection>;
    vendor: Vendor;
    catalog: Catalog;
    campaignTemplate: CampaignTemplate;
    mediaChannel: MediaChannel;
    results?: Maybe<ResultConnection>;
    creativeSpec: Scalars['JSONObject'];
    runTimeSpec: Scalars['JSONObject'];
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
export declare type MarketingCampaignMarketingAdsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type MarketingCampaignProductsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type MarketingCampaignResultsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type MarketingCampaignConnection = {
    edges?: Maybe<Array<Maybe<MarketingCampaignEdge>>>;
    pageInfo: PageInfo;
};
export declare type MarketingCampaignEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<MarketingCampaign>;
};
export declare type MarketingCampaignInput = {
    campaignTemplateId: Scalars['ObjectId'];
    creativeSpec: Scalars['JSONObject'];
    runTimeSpec: Scalars['JSONObject'];
    productIds?: Maybe<Array<Scalars['ObjectId']>>;
    status?: Maybe<MarketingCampaignStatus>;
    name?: Maybe<Scalars['NonEmptyString']>;
};
export declare enum MarketingCampaignStatus {
    Active = "ACTIVE",
    Paused = "PAUSED"
}
export declare type MarketingCampaignUpdateInput = {
    creativeSpec?: Maybe<Scalars['JSONObject']>;
    runTimeSpec?: Maybe<Scalars['JSONObject']>;
    status?: Maybe<MarketingCampaignStatus>;
    name?: Maybe<Scalars['NonEmptyString']>;
};
export declare type Marketplace = EntitlementResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    organization: Organization;
    mediaChannels?: Maybe<MediaChannelConnection>;
    campaignTemplates?: Maybe<CampaignTemplateConnection>;
    vendors?: Maybe<VendorConnection>;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
export declare type MarketplaceMediaChannelsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type MarketplaceCampaignTemplatesArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type MarketplaceVendorsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type MarketplaceConnection = {
    edges?: Maybe<Array<Maybe<MarketplaceEdge>>>;
    pageInfo: PageInfo;
};
export declare type MarketplaceEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Marketplace>;
};
export declare type MarketplaceInput = {
    name: Scalars['NonEmptyString'];
    organizationId: Scalars['ObjectId'];
};
export declare type MarketplaceUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};
export declare type MediaChannel = EntitlementResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    platform: Platform;
    remoteId?: Maybe<Scalars['String']>;
    remoteState: Scalars['JSONObject'];
    currency?: Maybe<Scalars['NonEmptyString']>;
    timezone?: Maybe<Scalars['NonEmptyString']>;
    tokenStatus: TokenStatus;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    catalogs: CatalogConnection;
    marketplace: Marketplace;
};
export declare type MediaChannelCatalogsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type MediaChannelConnection = {
    edges?: Maybe<Array<Maybe<MediaChannelEdge>>>;
    pageInfo: PageInfo;
};
export declare type MediaChannelCreateInput = {
    name: Scalars['NonEmptyString'];
    marketplaceId: Scalars['ObjectId'];
    platform: Platform;
    token: Scalars['NonEmptyString'];
};
export declare type MediaChannelEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<MediaChannel>;
};
export declare type MediaChannelImportInput = {
    marketplaceId: Scalars['ObjectId'];
    platform: Platform;
    remoteId: Scalars['String'];
    token: Scalars['NonEmptyString'];
};
export declare type MediaChannelUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
    token?: Maybe<Scalars['NonEmptyString']>;
};
export declare type Mutation = {
    createCatalog?: Maybe<Catalog>;
    importCatalog?: Maybe<Catalog>;
    deleteCatalog?: Maybe<Deletion>;
    updateCatalog?: Maybe<Catalog>;
    createEntitlement?: Maybe<Entitlement>;
    updateEntitlement?: Maybe<Entitlement>;
    deleteEntitlement?: Maybe<Deletion>;
    createMarketingCampaign?: Maybe<MarketingCampaign>;
    updateMarketingCampaign?: Maybe<MarketingCampaign>;
    deleteMarketingCampaign?: Maybe<Deletion>;
    createMarketplace?: Maybe<Marketplace>;
    updateMarketplace?: Maybe<Marketplace>;
    deleteMarketplace?: Maybe<Deletion>;
    createMediaChannel?: Maybe<MediaChannel>;
    importMediaChannel?: Maybe<MediaChannel>;
    updateMediaChannel?: Maybe<MediaChannel>;
    deleteMediaChannel?: Maybe<Deletion>;
    createOrganization?: Maybe<Organization>;
    updateOrganization?: Maybe<Organization>;
    deleteOrganization?: Maybe<Deletion>;
    createProduct?: Maybe<Product>;
    updateProduct?: Maybe<Product>;
    deleteProduct?: Maybe<Deletion>;
    login?: Maybe<Token>;
    updateUser?: Maybe<User>;
    refreshLogin?: Maybe<Token>;
    createVendor?: Maybe<Vendor>;
    updateVendor?: Maybe<Vendor>;
    deleteVendor?: Maybe<Deletion>;
};
export declare type MutationCreateCatalogArgs = {
    input: CatalogCreateInput;
};
export declare type MutationImportCatalogArgs = {
    input: CatalogImportInput;
};
export declare type MutationDeleteCatalogArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationUpdateCatalogArgs = {
    id: Scalars['ObjectId'];
    input: CatalogUpdateInput;
};
export declare type MutationCreateEntitlementArgs = {
    input: EntitlementInput;
};
export declare type MutationUpdateEntitlementArgs = {
    id: Scalars['ObjectId'];
    input: EntitlementUpdateInput;
};
export declare type MutationDeleteEntitlementArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateMarketingCampaignArgs = {
    input: MarketingCampaignInput;
};
export declare type MutationUpdateMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
    input: MarketingCampaignUpdateInput;
};
export declare type MutationDeleteMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateMarketplaceArgs = {
    input: MarketplaceInput;
};
export declare type MutationUpdateMarketplaceArgs = {
    id: Scalars['ObjectId'];
    input: MarketplaceUpdateInput;
};
export declare type MutationDeleteMarketplaceArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateMediaChannelArgs = {
    input: MediaChannelCreateInput;
};
export declare type MutationImportMediaChannelArgs = {
    input: MediaChannelImportInput;
};
export declare type MutationUpdateMediaChannelArgs = {
    id: Scalars['ObjectId'];
    input: MediaChannelUpdateInput;
};
export declare type MutationDeleteMediaChannelArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateOrganizationArgs = {
    input: OrganizationInput;
};
export declare type MutationUpdateOrganizationArgs = {
    id: Scalars['ObjectId'];
    input: OrganizationUpdateInput;
};
export declare type MutationDeleteOrganizationArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateProductArgs = {
    input: ProductInput;
};
export declare type MutationUpdateProductArgs = {
    id: Scalars['ObjectId'];
    input: ProductUpdateInput;
};
export declare type MutationDeleteProductArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationLoginArgs = {
    input: UserLoginInput;
};
export declare type MutationUpdateUserArgs = {
    input: UserUpdateInput;
};
export declare type MutationRefreshLoginArgs = {
    input: RefreshTokenInput;
};
export declare type MutationCreateVendorArgs = {
    input: VendorInput;
};
export declare type MutationUpdateVendorArgs = {
    id: Scalars['ObjectId'];
    input: VendorUpdateInput;
};
export declare type MutationDeleteVendorArgs = {
    id: Scalars['ObjectId'];
};
export declare enum Operator {
    Equals = "EQUALS",
    NotEquals = "NOT_EQUALS",
    Contains = "CONTAINS",
    Icontains = "ICONTAINS",
    Gt = "GT",
    Gte = "GTE",
    Lt = "LT",
    Lte = "LTE",
    In = "IN",
    IsNull = "IS_NULL"
}
export declare type Organization = EntitlementResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    users?: Maybe<UserConnection>;
    marketplaces?: Maybe<MarketplaceConnection>;
    name: Scalars['NonEmptyString'];
    tier: OrganizationTierEnum;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
export declare type OrganizationUsersArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type OrganizationMarketplacesArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type OrganizationConnection = {
    edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
    pageInfo: PageInfo;
};
export declare type OrganizationEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Organization>;
};
export declare type OrganizationInput = {
    name: Scalars['NonEmptyString'];
};
export declare enum OrganizationTierEnum {
    Standard = "Standard",
    Developer = "Developer"
}
export declare type OrganizationUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};
export declare type PageInfo = {
    hasNextPage: Scalars['Boolean'];
    startCursor?: Maybe<Scalars['String']>;
    endCursor?: Maybe<Scalars['String']>;
};
export declare enum Platform {
    Facebook = "facebook"
}
export declare type Product = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    sku: Scalars['NonEmptyString'];
    remoteState?: Maybe<Scalars['JSONObject']>;
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
    catalog: Catalog;
    metadata: Scalars['JSONObject'];
    vendor: Vendor;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
};
export declare type ProductMarketingCampaignsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type ProductConnection = {
    edges?: Maybe<Array<Maybe<ProductEdge>>>;
    pageInfo: PageInfo;
};
export declare type ProductEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Product>;
};
export declare type ProductInput = {
    vendorId: Scalars['ObjectId'];
    catalogId: Scalars['ObjectId'];
    metadata: Scalars['JSONObject'];
};
export declare type ProductUpdateInput = {
    metadata: Scalars['JSONObject'];
};
export declare type Query = {
    campaignTemplate?: Maybe<CampaignTemplate>;
    campaignTemplates?: Maybe<CampaignTemplateConnection>;
    catalog?: Maybe<Catalog>;
    catalogs?: Maybe<CatalogConnection>;
    entitlement?: Maybe<Entitlement>;
    entitlements?: Maybe<EntitlementConnection>;
    marketingAd?: Maybe<MarketingAd>;
    marketingAds?: Maybe<MarketingAdConnection>;
    marketingCampaign?: Maybe<MarketingCampaign>;
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
    marketplace?: Maybe<Marketplace>;
    marketplaces?: Maybe<MarketplaceConnection>;
    mediaChannel?: Maybe<MediaChannel>;
    mediaChannels?: Maybe<MediaChannelConnection>;
    organization?: Maybe<Organization>;
    organizations?: Maybe<OrganizationConnection>;
    product?: Maybe<Product>;
    products?: Maybe<ProductConnection>;
    result?: Maybe<Result>;
    results?: Maybe<ResultConnection>;
    me?: Maybe<User>;
    vendor?: Maybe<Vendor>;
    vendors?: Maybe<VendorConnection>;
};
export declare type QueryCampaignTemplateArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryCampaignTemplatesArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type QueryCatalogArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryCatalogsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryEntitlementArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryEntitlementsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type QueryMarketingAdArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryMarketingAdsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type QueryMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryMarketingCampaignsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMarketplaceArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryMarketplacesArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMediaChannelArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryMediaChannelsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryOrganizationArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryOrganizationsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryProductArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryProductsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryResultArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryResultsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type QueryVendorArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryVendorsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type RefreshTokenInput = {
    refreshToken: Scalars['String'];
};
export declare type Result = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    date: Scalars['DateISO'];
    analytics: ResultAnalytics;
    type: ResultResourceTypeEnum;
    resource: ResultResource;
    vendor: Vendor;
};
export declare type ResultAnalytics = {
    results?: Maybe<Scalars['Int']>;
    impressions?: Maybe<Scalars['Int']>;
    clicks?: Maybe<Scalars['Int']>;
    spend?: Maybe<Scalars['Float']>;
};
export declare type ResultConnection = {
    edges?: Maybe<Array<Maybe<ResultEdge>>>;
    pageInfo: PageInfo;
};
export declare type ResultEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Result>;
};
export declare type ResultResource = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    vendor: Vendor;
};
export declare enum ResultResourceTypeEnum {
    MarketingAd = "MarketingAd",
    MarketingCampaign = "MarketingCampaign"
}
export declare enum SystemStatus {
    Pending = "PENDING",
    PendingDeletion = "PENDING_DELETION",
    PendingSync = "PENDING_SYNC",
    Processing = "PROCESSING",
    ProcessingSync = "PROCESSING_SYNC",
    ProcessingDeletion = "PROCESSING_DELETION",
    Processed = "PROCESSED",
    Error = "ERROR",
    Deleted = "DELETED"
}
export declare type Token = {
    token: Scalars['String'];
    refreshToken: Scalars['String'];
    expiryDate: Scalars['DateISO'];
    user: User;
};
export declare enum TokenStatus {
    Pending = "PENDING",
    Missing = "MISSING",
    Valid = "VALID",
    Invalid = "INVALID"
}
export declare type User = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    email: Scalars['NonEmptyString'];
    firstName?: Maybe<Scalars['NonEmptyString']>;
    lastName?: Maybe<Scalars['NonEmptyString']>;
    organizations?: Maybe<OrganizationConnection>;
    entitlements?: Maybe<EntitlementConnection>;
};
export declare type UserOrganizationsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type UserEntitlementsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};
export declare type UserConnection = {
    edges?: Maybe<Array<Maybe<UserEdge>>>;
    pageInfo: PageInfo;
};
export declare type UserEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<User>;
};
export declare type UserLoginInput = {
    password: Scalars['NonEmptyString'];
    email: Scalars['NonEmptyString'];
};
export declare type UserUpdateInput = {
    firstName?: Maybe<Scalars['NonEmptyString']>;
    lastName?: Maybe<Scalars['NonEmptyString']>;
    password?: Maybe<Scalars['NonEmptyString']>;
    email?: Maybe<Scalars['NonEmptyString']>;
};
export declare type Vendor = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    marketplace: Marketplace;
    products?: Maybe<ProductConnection>;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
export declare type VendorProductsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type VendorConnection = {
    edges?: Maybe<Array<Maybe<VendorEdge>>>;
    pageInfo: PageInfo;
};
export declare type VendorEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Vendor>;
};
export declare type VendorInput = {
    name: Scalars['NonEmptyString'];
    marketplaceId: Scalars['ObjectId'];
};
export declare type VendorUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type StitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
    Query: ResolverTypeWrapper<{}>;
    ObjectId: ResolverTypeWrapper<Scalars['ObjectId']>;
    CampaignTemplate: ResolverTypeWrapper<CampaignTemplate>;
    DateISO: ResolverTypeWrapper<Scalars['DateISO']>;
    NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Platform: Platform;
    Marketplace: ResolverTypeWrapper<Marketplace>;
    EntitlementResource: ResolverTypeWrapper<EntitlementResource>;
    SystemStatus: SystemStatus;
    JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
    Organization: ResolverTypeWrapper<Organization>;
    FilterInput: ResolverTypeWrapper<Scalars['FilterInput']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    UserConnection: ResolverTypeWrapper<UserConnection>;
    UserEdge: ResolverTypeWrapper<UserEdge>;
    User: ResolverTypeWrapper<User>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    OrganizationConnection: ResolverTypeWrapper<OrganizationConnection>;
    OrganizationEdge: ResolverTypeWrapper<OrganizationEdge>;
    PageInfo: ResolverTypeWrapper<PageInfo>;
    EntitlementConnection: ResolverTypeWrapper<EntitlementConnection>;
    EntitlementEdge: ResolverTypeWrapper<EntitlementEdge>;
    Entitlement: ResolverTypeWrapper<Entitlement>;
    EntitlementResourceTypeEnum: EntitlementResourceTypeEnum;
    AuthPermission: AuthPermission;
    MarketplaceConnection: ResolverTypeWrapper<MarketplaceConnection>;
    MarketplaceEdge: ResolverTypeWrapper<MarketplaceEdge>;
    OrganizationTierEnum: OrganizationTierEnum;
    MediaChannelConnection: ResolverTypeWrapper<MediaChannelConnection>;
    MediaChannelEdge: ResolverTypeWrapper<MediaChannelEdge>;
    MediaChannel: ResolverTypeWrapper<MediaChannel>;
    TokenStatus: TokenStatus;
    CatalogConnection: ResolverTypeWrapper<CatalogConnection>;
    CatalogEdge: ResolverTypeWrapper<CatalogEdge>;
    Catalog: ResolverTypeWrapper<Catalog>;
    CatalogType: CatalogType;
    ProductConnection: ResolverTypeWrapper<ProductConnection>;
    ProductEdge: ResolverTypeWrapper<ProductEdge>;
    Product: ResolverTypeWrapper<Product>;
    MarketingCampaignConnection: ResolverTypeWrapper<MarketingCampaignConnection>;
    MarketingCampaignEdge: ResolverTypeWrapper<MarketingCampaignEdge>;
    MarketingCampaign: ResolverTypeWrapper<MarketingCampaign>;
    ResultResource: ResolverTypeWrapper<ResultResource>;
    Vendor: ResolverTypeWrapper<Vendor>;
    MarketingCampaignStatus: MarketingCampaignStatus;
    MarketingAdConnection: ResolverTypeWrapper<MarketingAdConnection>;
    MarketingAdEdge: ResolverTypeWrapper<MarketingAdEdge>;
    MarketingAd: ResolverTypeWrapper<MarketingAd>;
    ResultConnection: ResolverTypeWrapper<ResultConnection>;
    ResultEdge: ResolverTypeWrapper<ResultEdge>;
    Result: ResolverTypeWrapper<Result>;
    ResultAnalytics: ResolverTypeWrapper<ResultAnalytics>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ResultResourceTypeEnum: ResultResourceTypeEnum;
    CampaignTemplateConnection: ResolverTypeWrapper<CampaignTemplateConnection>;
    CampaignTemplateEdge: ResolverTypeWrapper<CampaignTemplateEdge>;
    VendorConnection: ResolverTypeWrapper<VendorConnection>;
    VendorEdge: ResolverTypeWrapper<VendorEdge>;
    Mutation: ResolverTypeWrapper<{}>;
    CatalogCreateInput: CatalogCreateInput;
    CatalogImportInput: CatalogImportInput;
    Deletion: ResolverTypeWrapper<Deletion>;
    CatalogUpdateInput: CatalogUpdateInput;
    EntitlementInput: EntitlementInput;
    EntitlementUpdateInput: EntitlementUpdateInput;
    MarketingCampaignInput: MarketingCampaignInput;
    MarketingCampaignUpdateInput: MarketingCampaignUpdateInput;
    MarketplaceInput: MarketplaceInput;
    MarketplaceUpdateInput: MarketplaceUpdateInput;
    MediaChannelCreateInput: MediaChannelCreateInput;
    MediaChannelImportInput: MediaChannelImportInput;
    MediaChannelUpdateInput: MediaChannelUpdateInput;
    OrganizationInput: OrganizationInput;
    OrganizationUpdateInput: OrganizationUpdateInput;
    ProductInput: ProductInput;
    ProductUpdateInput: ProductUpdateInput;
    UserLoginInput: UserLoginInput;
    Token: ResolverTypeWrapper<Token>;
    UserUpdateInput: UserUpdateInput;
    RefreshTokenInput: RefreshTokenInput;
    VendorInput: VendorInput;
    VendorUpdateInput: VendorUpdateInput;
    AuthField: AuthField;
    AuthLocation: AuthLocation;
    AuthType: AuthType;
    CacheControlScope: CacheControlScope;
    OPERATOR: Operator;
    Upload: ResolverTypeWrapper<Scalars['Upload']>;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
    Query: {};
    ObjectId: Scalars['ObjectId'];
    CampaignTemplate: CampaignTemplate;
    DateISO: Scalars['DateISO'];
    NonEmptyString: Scalars['NonEmptyString'];
    String: Scalars['String'];
    Platform: Platform;
    Marketplace: Marketplace;
    EntitlementResource: EntitlementResource;
    SystemStatus: SystemStatus;
    JSONObject: Scalars['JSONObject'];
    Organization: Organization;
    FilterInput: Scalars['FilterInput'];
    Int: Scalars['Int'];
    UserConnection: UserConnection;
    UserEdge: UserEdge;
    User: User;
    Boolean: Scalars['Boolean'];
    OrganizationConnection: OrganizationConnection;
    OrganizationEdge: OrganizationEdge;
    PageInfo: PageInfo;
    EntitlementConnection: EntitlementConnection;
    EntitlementEdge: EntitlementEdge;
    Entitlement: Entitlement;
    EntitlementResourceTypeEnum: EntitlementResourceTypeEnum;
    AuthPermission: AuthPermission;
    MarketplaceConnection: MarketplaceConnection;
    MarketplaceEdge: MarketplaceEdge;
    OrganizationTierEnum: OrganizationTierEnum;
    MediaChannelConnection: MediaChannelConnection;
    MediaChannelEdge: MediaChannelEdge;
    MediaChannel: MediaChannel;
    TokenStatus: TokenStatus;
    CatalogConnection: CatalogConnection;
    CatalogEdge: CatalogEdge;
    Catalog: Catalog;
    CatalogType: CatalogType;
    ProductConnection: ProductConnection;
    ProductEdge: ProductEdge;
    Product: Product;
    MarketingCampaignConnection: MarketingCampaignConnection;
    MarketingCampaignEdge: MarketingCampaignEdge;
    MarketingCampaign: MarketingCampaign;
    ResultResource: ResultResource;
    Vendor: Vendor;
    MarketingCampaignStatus: MarketingCampaignStatus;
    MarketingAdConnection: MarketingAdConnection;
    MarketingAdEdge: MarketingAdEdge;
    MarketingAd: MarketingAd;
    ResultConnection: ResultConnection;
    ResultEdge: ResultEdge;
    Result: Result;
    ResultAnalytics: ResultAnalytics;
    Float: Scalars['Float'];
    ResultResourceTypeEnum: ResultResourceTypeEnum;
    CampaignTemplateConnection: CampaignTemplateConnection;
    CampaignTemplateEdge: CampaignTemplateEdge;
    VendorConnection: VendorConnection;
    VendorEdge: VendorEdge;
    Mutation: {};
    CatalogCreateInput: CatalogCreateInput;
    CatalogImportInput: CatalogImportInput;
    Deletion: Deletion;
    CatalogUpdateInput: CatalogUpdateInput;
    EntitlementInput: EntitlementInput;
    EntitlementUpdateInput: EntitlementUpdateInput;
    MarketingCampaignInput: MarketingCampaignInput;
    MarketingCampaignUpdateInput: MarketingCampaignUpdateInput;
    MarketplaceInput: MarketplaceInput;
    MarketplaceUpdateInput: MarketplaceUpdateInput;
    MediaChannelCreateInput: MediaChannelCreateInput;
    MediaChannelImportInput: MediaChannelImportInput;
    MediaChannelUpdateInput: MediaChannelUpdateInput;
    OrganizationInput: OrganizationInput;
    OrganizationUpdateInput: OrganizationUpdateInput;
    ProductInput: ProductInput;
    ProductUpdateInput: ProductUpdateInput;
    UserLoginInput: UserLoginInput;
    Token: Token;
    UserUpdateInput: UserUpdateInput;
    RefreshTokenInput: RefreshTokenInput;
    VendorInput: VendorInput;
    VendorUpdateInput: VendorUpdateInput;
    AuthField: AuthField;
    AuthLocation: AuthLocation;
    AuthType: AuthType;
    CacheControlScope: CacheControlScope;
    OPERATOR: Operator;
    Upload: Scalars['Upload'];
};
export declare type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = {
    field?: Maybe<Maybe<AuthField>>;
    location?: Maybe<Maybe<AuthLocation>>;
    type?: Maybe<Maybe<AuthType>>;
    permissions?: Maybe<Maybe<Array<Maybe<AuthPermission>>>>;
}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export declare type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {
    maxAge?: Maybe<Maybe<Scalars['Int']>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export declare type CampaignTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignTemplate'] = ResolversParentTypes['CampaignTemplate']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
    remoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    marketplace?: Resolver<ResolversTypes['Marketplace'], ParentType, ContextType>;
    marketingCampaigns?: Resolver<Maybe<ResolversTypes['MarketingCampaignConnection']>, ParentType, ContextType, RequireFields<CampaignTemplateMarketingCampaignsArgs, 'showDeleted'>>;
};
export declare type CampaignTemplateConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignTemplateConnection'] = ResolversParentTypes['CampaignTemplateConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CampaignTemplateEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type CampaignTemplateEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignTemplateEdge'] = ResolversParentTypes['CampaignTemplateEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['CampaignTemplate']>, ParentType, ContextType>;
};
export declare type CatalogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Catalog'] = ResolversParentTypes['Catalog']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    catalogType?: Resolver<ResolversTypes['CatalogType'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    remoteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    remoteState?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    dataFeedId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
    mediaChannel?: Resolver<ResolversTypes['MediaChannel'], ParentType, ContextType>;
    products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<CatalogProductsArgs, 'showDeleted'>>;
};
export declare type CatalogConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogConnection'] = ResolversParentTypes['CatalogConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type CatalogEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogEdge'] = ResolversParentTypes['CatalogEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType>;
};
export interface DateIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateISO'], any> {
    name: 'DateISO';
}
export declare type DeletionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deletion'] = ResolversParentTypes['Deletion']> = {
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};
export declare type EntitlementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entitlement'] = ResolversParentTypes['Entitlement']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['EntitlementResourceTypeEnum'], ParentType, ContextType>;
    resource?: Resolver<ResolversTypes['EntitlementResource'], ParentType, ContextType>;
    permissions?: Resolver<Array<ResolversTypes['AuthPermission']>, ParentType, ContextType>;
};
export declare type EntitlementConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitlementConnection'] = ResolversParentTypes['EntitlementConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['EntitlementEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type EntitlementEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitlementEdge'] = ResolversParentTypes['EntitlementEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Entitlement']>, ParentType, ContextType>;
};
export declare type EntitlementResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitlementResource'] = ResolversParentTypes['EntitlementResource']> = {
    __resolveType: TypeResolveFn<'Marketplace' | 'Organization' | 'MediaChannel', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export interface FilterInputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FilterInput'], any> {
    name: 'FilterInput';
}
export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
    name: 'JSONObject';
}
export declare type MarketingAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingAd'] = ResolversParentTypes['MarketingAd']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    remoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    results?: Resolver<Maybe<ResolversTypes['ResultConnection']>, ParentType, ContextType, MarketingAdResultsArgs>;
    marketingCampaign?: Resolver<ResolversTypes['MarketingCampaign'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};
export declare type MarketingAdConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingAdConnection'] = ResolversParentTypes['MarketingAdConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarketingAdEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type MarketingAdEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingAdEdge'] = ResolversParentTypes['MarketingAdEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['MarketingAd']>, ParentType, ContextType>;
};
export declare type MarketingCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingCampaign'] = ResolversParentTypes['MarketingCampaign']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['MarketingCampaignStatus'], ParentType, ContextType>;
    marketingAds?: Resolver<Maybe<ResolversTypes['MarketingAdConnection']>, ParentType, ContextType, MarketingCampaignMarketingAdsArgs>;
    products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<MarketingCampaignProductsArgs, 'showDeleted'>>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    catalog?: Resolver<ResolversTypes['Catalog'], ParentType, ContextType>;
    campaignTemplate?: Resolver<ResolversTypes['CampaignTemplate'], ParentType, ContextType>;
    mediaChannel?: Resolver<ResolversTypes['MediaChannel'], ParentType, ContextType>;
    results?: Resolver<Maybe<ResolversTypes['ResultConnection']>, ParentType, ContextType, MarketingCampaignResultsArgs>;
    creativeSpec?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    runTimeSpec?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type MarketingCampaignConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingCampaignConnection'] = ResolversParentTypes['MarketingCampaignConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarketingCampaignEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type MarketingCampaignEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingCampaignEdge'] = ResolversParentTypes['MarketingCampaignEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['MarketingCampaign']>, ParentType, ContextType>;
};
export declare type MarketplaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Marketplace'] = ResolversParentTypes['Marketplace']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
    mediaChannels?: Resolver<Maybe<ResolversTypes['MediaChannelConnection']>, ParentType, ContextType, RequireFields<MarketplaceMediaChannelsArgs, 'showDeleted'>>;
    campaignTemplates?: Resolver<Maybe<ResolversTypes['CampaignTemplateConnection']>, ParentType, ContextType, MarketplaceCampaignTemplatesArgs>;
    vendors?: Resolver<Maybe<ResolversTypes['VendorConnection']>, ParentType, ContextType, RequireFields<MarketplaceVendorsArgs, 'showDeleted'>>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type MarketplaceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplaceConnection'] = ResolversParentTypes['MarketplaceConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarketplaceEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type MarketplaceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplaceEdge'] = ResolversParentTypes['MarketplaceEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Marketplace']>, ParentType, ContextType>;
};
export declare type MediaChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaChannel'] = ResolversParentTypes['MediaChannel']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
    remoteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    remoteState?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    currency?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    timezone?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    tokenStatus?: Resolver<ResolversTypes['TokenStatus'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
    catalogs?: Resolver<ResolversTypes['CatalogConnection'], ParentType, ContextType, RequireFields<MediaChannelCatalogsArgs, 'showDeleted'>>;
    marketplace?: Resolver<ResolversTypes['Marketplace'], ParentType, ContextType>;
};
export declare type MediaChannelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaChannelConnection'] = ResolversParentTypes['MediaChannelConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaChannelEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type MediaChannelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaChannelEdge'] = ResolversParentTypes['MediaChannelEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType>;
};
export declare type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    createCatalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, RequireFields<MutationCreateCatalogArgs, 'input'>>;
    importCatalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, RequireFields<MutationImportCatalogArgs, 'input'>>;
    deleteCatalog?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteCatalogArgs, 'id'>>;
    updateCatalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, RequireFields<MutationUpdateCatalogArgs, 'id' | 'input'>>;
    createEntitlement?: Resolver<Maybe<ResolversTypes['Entitlement']>, ParentType, ContextType, RequireFields<MutationCreateEntitlementArgs, 'input'>>;
    updateEntitlement?: Resolver<Maybe<ResolversTypes['Entitlement']>, ParentType, ContextType, RequireFields<MutationUpdateEntitlementArgs, 'id' | 'input'>>;
    deleteEntitlement?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteEntitlementArgs, 'id'>>;
    createMarketingCampaign?: Resolver<Maybe<ResolversTypes['MarketingCampaign']>, ParentType, ContextType, RequireFields<MutationCreateMarketingCampaignArgs, 'input'>>;
    updateMarketingCampaign?: Resolver<Maybe<ResolversTypes['MarketingCampaign']>, ParentType, ContextType, RequireFields<MutationUpdateMarketingCampaignArgs, 'id' | 'input'>>;
    deleteMarketingCampaign?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteMarketingCampaignArgs, 'id'>>;
    createMarketplace?: Resolver<Maybe<ResolversTypes['Marketplace']>, ParentType, ContextType, RequireFields<MutationCreateMarketplaceArgs, 'input'>>;
    updateMarketplace?: Resolver<Maybe<ResolversTypes['Marketplace']>, ParentType, ContextType, RequireFields<MutationUpdateMarketplaceArgs, 'id' | 'input'>>;
    deleteMarketplace?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteMarketplaceArgs, 'id'>>;
    createMediaChannel?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType, RequireFields<MutationCreateMediaChannelArgs, 'input'>>;
    importMediaChannel?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType, RequireFields<MutationImportMediaChannelArgs, 'input'>>;
    updateMediaChannel?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType, RequireFields<MutationUpdateMediaChannelArgs, 'id' | 'input'>>;
    deleteMediaChannel?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteMediaChannelArgs, 'id'>>;
    createOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'input'>>;
    updateOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationArgs, 'id' | 'input'>>;
    deleteOrganization?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteOrganizationArgs, 'id'>>;
    createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
    updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'input'>>;
    deleteProduct?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
    login?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
    updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
    refreshLogin?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationRefreshLoginArgs, 'input'>>;
    createVendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<MutationCreateVendorArgs, 'input'>>;
    updateVendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<MutationUpdateVendorArgs, 'id' | 'input'>>;
    deleteVendor?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteVendorArgs, 'id'>>;
};
export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
    name: 'NonEmptyString';
}
export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
    name: 'ObjectId';
}
export declare type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    users?: Resolver<Maybe<ResolversTypes['UserConnection']>, ParentType, ContextType, OrganizationUsersArgs>;
    marketplaces?: Resolver<Maybe<ResolversTypes['MarketplaceConnection']>, ParentType, ContextType, RequireFields<OrganizationMarketplacesArgs, 'showDeleted'>>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    tier?: Resolver<ResolversTypes['OrganizationTierEnum'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type OrganizationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationConnection'] = ResolversParentTypes['OrganizationConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type OrganizationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationEdge'] = ResolversParentTypes['OrganizationEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
};
export declare type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
    hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};
export declare type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    sku?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    remoteState?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
    marketingCampaigns?: Resolver<Maybe<ResolversTypes['MarketingCampaignConnection']>, ParentType, ContextType, RequireFields<ProductMarketingCampaignsArgs, 'showDeleted'>>;
    catalog?: Resolver<ResolversTypes['Catalog'], ParentType, ContextType>;
    metadata?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
    warnings?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    campaignTemplate?: Resolver<Maybe<ResolversTypes['CampaignTemplate']>, ParentType, ContextType, RequireFields<QueryCampaignTemplateArgs, 'id'>>;
    campaignTemplates?: Resolver<Maybe<ResolversTypes['CampaignTemplateConnection']>, ParentType, ContextType, QueryCampaignTemplatesArgs>;
    catalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, RequireFields<QueryCatalogArgs, 'id'>>;
    catalogs?: Resolver<Maybe<ResolversTypes['CatalogConnection']>, ParentType, ContextType, RequireFields<QueryCatalogsArgs, 'showDeleted'>>;
    entitlement?: Resolver<Maybe<ResolversTypes['Entitlement']>, ParentType, ContextType, RequireFields<QueryEntitlementArgs, 'id'>>;
    entitlements?: Resolver<Maybe<ResolversTypes['EntitlementConnection']>, ParentType, ContextType, QueryEntitlementsArgs>;
    marketingAd?: Resolver<Maybe<ResolversTypes['MarketingAd']>, ParentType, ContextType, RequireFields<QueryMarketingAdArgs, 'id'>>;
    marketingAds?: Resolver<Maybe<ResolversTypes['MarketingAdConnection']>, ParentType, ContextType, QueryMarketingAdsArgs>;
    marketingCampaign?: Resolver<Maybe<ResolversTypes['MarketingCampaign']>, ParentType, ContextType, RequireFields<QueryMarketingCampaignArgs, 'id'>>;
    marketingCampaigns?: Resolver<Maybe<ResolversTypes['MarketingCampaignConnection']>, ParentType, ContextType, RequireFields<QueryMarketingCampaignsArgs, 'showDeleted'>>;
    marketplace?: Resolver<Maybe<ResolversTypes['Marketplace']>, ParentType, ContextType, RequireFields<QueryMarketplaceArgs, 'id'>>;
    marketplaces?: Resolver<Maybe<ResolversTypes['MarketplaceConnection']>, ParentType, ContextType, RequireFields<QueryMarketplacesArgs, 'showDeleted'>>;
    mediaChannel?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType, RequireFields<QueryMediaChannelArgs, 'id'>>;
    mediaChannels?: Resolver<Maybe<ResolversTypes['MediaChannelConnection']>, ParentType, ContextType, RequireFields<QueryMediaChannelsArgs, 'showDeleted'>>;
    organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'id'>>;
    organizations?: Resolver<Maybe<ResolversTypes['OrganizationConnection']>, ParentType, ContextType, RequireFields<QueryOrganizationsArgs, 'showDeleted'>>;
    product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
    products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'showDeleted'>>;
    result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<QueryResultArgs, 'id'>>;
    results?: Resolver<Maybe<ResolversTypes['ResultConnection']>, ParentType, ContextType, QueryResultsArgs>;
    me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<QueryVendorArgs, 'id'>>;
    vendors?: Resolver<Maybe<ResolversTypes['VendorConnection']>, ParentType, ContextType, RequireFields<QueryVendorsArgs, 'showDeleted'>>;
};
export declare type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    date?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    analytics?: Resolver<ResolversTypes['ResultAnalytics'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['ResultResourceTypeEnum'], ParentType, ContextType>;
    resource?: Resolver<ResolversTypes['ResultResource'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};
export declare type ResultAnalyticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultAnalytics'] = ResolversParentTypes['ResultAnalytics']> = {
    results?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    impressions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    clicks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    spend?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};
export declare type ResultConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultConnection'] = ResolversParentTypes['ResultConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResultEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type ResultEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultEdge'] = ResolversParentTypes['ResultEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
};
export declare type ResultResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultResource'] = ResolversParentTypes['ResultResource']> = {
    __resolveType: TypeResolveFn<'MarketingCampaign' | 'MarketingAd', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};
export declare type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    expiryDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};
export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
    name: 'Upload';
}
export declare type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    email?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    firstName?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    lastName?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    organizations?: Resolver<Maybe<ResolversTypes['OrganizationConnection']>, ParentType, ContextType, RequireFields<UserOrganizationsArgs, 'showDeleted'>>;
    entitlements?: Resolver<Maybe<ResolversTypes['EntitlementConnection']>, ParentType, ContextType, UserEntitlementsArgs>;
};
export declare type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};
export declare type VendorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vendor'] = ResolversParentTypes['Vendor']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    marketplace?: Resolver<ResolversTypes['Marketplace'], ParentType, ContextType>;
    products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<VendorProductsArgs, 'showDeleted'>>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type VendorConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VendorConnection'] = ResolversParentTypes['VendorConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['VendorEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type VendorEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VendorEdge'] = ResolversParentTypes['VendorEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
};
export declare type Resolvers<ContextType = any> = {
    CampaignTemplate?: CampaignTemplateResolvers<ContextType>;
    CampaignTemplateConnection?: CampaignTemplateConnectionResolvers<ContextType>;
    CampaignTemplateEdge?: CampaignTemplateEdgeResolvers<ContextType>;
    Catalog?: CatalogResolvers<ContextType>;
    CatalogConnection?: CatalogConnectionResolvers<ContextType>;
    CatalogEdge?: CatalogEdgeResolvers<ContextType>;
    DateISO?: GraphQLScalarType;
    Deletion?: DeletionResolvers<ContextType>;
    Entitlement?: EntitlementResolvers<ContextType>;
    EntitlementConnection?: EntitlementConnectionResolvers<ContextType>;
    EntitlementEdge?: EntitlementEdgeResolvers<ContextType>;
    EntitlementResource?: EntitlementResourceResolvers;
    FilterInput?: GraphQLScalarType;
    JSONObject?: GraphQLScalarType;
    MarketingAd?: MarketingAdResolvers<ContextType>;
    MarketingAdConnection?: MarketingAdConnectionResolvers<ContextType>;
    MarketingAdEdge?: MarketingAdEdgeResolvers<ContextType>;
    MarketingCampaign?: MarketingCampaignResolvers<ContextType>;
    MarketingCampaignConnection?: MarketingCampaignConnectionResolvers<ContextType>;
    MarketingCampaignEdge?: MarketingCampaignEdgeResolvers<ContextType>;
    Marketplace?: MarketplaceResolvers<ContextType>;
    MarketplaceConnection?: MarketplaceConnectionResolvers<ContextType>;
    MarketplaceEdge?: MarketplaceEdgeResolvers<ContextType>;
    MediaChannel?: MediaChannelResolvers<ContextType>;
    MediaChannelConnection?: MediaChannelConnectionResolvers<ContextType>;
    MediaChannelEdge?: MediaChannelEdgeResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    NonEmptyString?: GraphQLScalarType;
    ObjectId?: GraphQLScalarType;
    Organization?: OrganizationResolvers<ContextType>;
    OrganizationConnection?: OrganizationConnectionResolvers<ContextType>;
    OrganizationEdge?: OrganizationEdgeResolvers<ContextType>;
    PageInfo?: PageInfoResolvers<ContextType>;
    Product?: ProductResolvers<ContextType>;
    ProductConnection?: ProductConnectionResolvers<ContextType>;
    ProductEdge?: ProductEdgeResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Result?: ResultResolvers<ContextType>;
    ResultAnalytics?: ResultAnalyticsResolvers<ContextType>;
    ResultConnection?: ResultConnectionResolvers<ContextType>;
    ResultEdge?: ResultEdgeResolvers<ContextType>;
    ResultResource?: ResultResourceResolvers;
    Token?: TokenResolvers<ContextType>;
    Upload?: GraphQLScalarType;
    User?: UserResolvers<ContextType>;
    UserConnection?: UserConnectionResolvers<ContextType>;
    UserEdge?: UserEdgeResolvers<ContextType>;
    Vendor?: VendorResolvers<ContextType>;
    VendorConnection?: VendorConnectionResolvers<ContextType>;
    VendorEdge?: VendorEdgeResolvers<ContextType>;
};
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export declare type IResolvers<ContextType = any> = Resolvers<ContextType>;
export declare type DirectiveResolvers<ContextType = any> = {
    auth?: AuthDirectiveResolver<any, any, ContextType>;
    cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export declare type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
