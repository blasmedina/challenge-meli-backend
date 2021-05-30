export declare namespace FindProductsResponse {
  export interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  }

  export interface Ratings {
    negative: number;
    positive: number;
    neutral: number;
  }

  export interface Transactions {
    total: number;
    canceled: number;
    period: string;
    ratings: Ratings;
    completed: number;
  }

  export interface Claims {
    rate: number;
    value: number;
    period: string;
  }

  export interface DelayedHandlingTime {
    rate: number;
    value: number;
    period: string;
  }

  export interface Sales {
    period: string;
    completed: number;
  }

  export interface Cancellations {
    rate: number;
    value: number;
    period: string;
  }

  export interface Metrics {
    claims: Claims;
    delayed_handling_time: DelayedHandlingTime;
    sales: Sales;
    cancellations: Cancellations;
  }

  export interface SellerReputation {
    transactions: Transactions;
    power_seller_status?: any;
    metrics: Metrics;
    level_id?: any;
  }

  export interface Seller {
    id: number;
    permalink: string;
    registration_date: Date;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: string[];
    seller_reputation: SellerReputation;
    home_image_url: string;
  }

  export interface Conditions {
    context_restrictions: any[];
    start_time?: any;
    end_time?: any;
    eligible: boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Metadata {}

  export interface Price {
    id: string;
    type: string;
    conditions: Conditions;
    amount: number;
    regular_amount?: any;
    currency_id: string;
    exchange_rate_context: string;
    metadata: Metadata;
    last_updated: Date;
  }

  export interface Presentation {
    display_currency: string;
  }

  export interface Prices {
    id: string;
    prices: Price[];
    presentation: Presentation;
    payment_method_prices: any[];
    reference_prices: any[];
    purchase_discounts: any[];
  }

  export interface Address {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
    area_code: string;
    phone1: string;
  }

  export interface Shipping {
    free_shipping: boolean;
    mode: string;
    tags: any[];
    logistic_type: string;
    store_pick_up: boolean;
  }

  export interface Country {
    id: string;
    name: string;
  }

  export interface State {
    id: string;
    name: string;
  }

  export interface City {
    id: string;
    name: string;
  }

  export interface SellerAddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: Country;
    state: State;
    city: City;
    latitude: string;
    longitude: string;
  }

  export interface SellerContact {
    contact: string;
    other_info: string;
    area_code: string;
    phone: string;
    area_code2: string;
    phone2: string;
    email: string;
    webpage: string;
  }

  export interface Neighborhood {
    id: string;
    name: string;
  }

  export interface City2 {
    id: string;
    name: string;
  }

  export interface State2 {
    id: string;
    name: string;
  }

  export interface Country2 {
    id: string;
    name: string;
  }

  export interface Location {
    address_line: string;
    zip_code: string;
    subneighborhood?: any;
    neighborhood: Neighborhood;
    city: City2;
    state: State2;
    country: Country2;
    latitude: number;
    longitude: number;
  }

  export interface ValueStruct {
    number: number;
    unit: string;
  }

  export interface Struct {
    number: number;
    unit: string;
  }

  export interface Value {
    struct: Struct;
    source: any;
    id: string;
    name: string;
  }

  export interface Attribute {
    value_struct: ValueStruct;
    values: Value[];
    attribute_group_id: string;
    attribute_group_name: string;
    source: any;
    id: string;
    value_id: string;
    value_name: string;
    name: string;
  }

  export interface Result {
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    sale_price?: any;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments?: any;
    address: Address;
    shipping: Shipping;
    seller_address: SellerAddress;
    seller_contact: SellerContact;
    location: Location;
    attributes: Attribute[];
    original_price?: any;
    category_id: string;
    official_store_id?: number;
    domain_id: string;
    catalog_product_id?: any;
    tags: string[];
    order_backend: number;
    use_thumbnail_id: boolean;
  }

  export interface Sort {
    id: string;
    name: string;
  }

  export interface AvailableSort {
    id: string;
    name: string;
  }

  export interface PathFromRoot {
    id: string;
    name: string;
  }

  export interface Value2 {
    id: string;
    name: string;
    path_from_root: PathFromRoot[];
  }

  export interface Filter {
    id: string;
    name: string;
    type: string;
    values: Value2[];
  }

  export interface Value3 {
    id: string;
    name: string;
    results: number;
  }

  export interface AvailableFilter {
    id: string;
    name: string;
    type: string;
    values: Value3[];
  }

  export interface RootObject {
    site_id: string;
    query: string;
    paging: Paging;
    results: Result[];
    secondary_results: any[];
    related_results: any[];
    sort: Sort;
    available_sorts: AvailableSort[];
    filters: Filter[];
    available_filters: AvailableFilter[];
  }
}
