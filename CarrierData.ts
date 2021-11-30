export enum CarrierTypeNames {
    DEFAULT = '',
    HFD = 'HFD',
    EPOST = 'Epost',
    TAPUZ = 'Tapuz',
    ORIAN = 'Orian',
    SELF = 'Self',
    ZIG_ZAG = 'ZigZag',
    IL_POST = 'IL-Post',
    CARGO_EXPRESS = 'CargoExpress',
    SOSNA = 'sosna',
    GETT = 'Gett',
    BOXIT = 'Boxit',
    FLYING_CARGO = 'FlyingCargo',
    CHEETAH = 'Cheetah',
    CHEETAH_SHOPS = 'CheetahShops',
    OPTIMO = 'OptimoRoute',
    ASAP = 'ASAP',
    UPS_IL = 'UPSIsrael', // Obsolete. Can be removed once carrier info is updated in all environments.
    UPS_PICKUP = 'UPS-Pickup',
    UPS_DELIVERY = 'UPS-Delivery',
    ROM = 'Rom',
    DTDC = 'DTDC',
    SHIPPO = 'Shippo',
    YDM = 'YDM',
    BUZZ = 'Buzz',
    ISGAV = 'Isgav',
    DVORA = 'Dvora',
    UPS_USA_DELIVERY = 'UPS-USA-Delivery',
    LIONWHEEL = 'LionWheel',
    AGAN_TPL = 'Agan-3PL',
    ORIAN_TPL = 'Orian-3PL',
    HMT = 'HMT',
    TAMNON = 'Tamnon',
    K_EXPRESS = 'K-Express',
    RAKUTEN = 'Rakuten',
    RATZ_PLUS = 'RatzPlus'
}
  
export enum FreightServiceType {
    LAST_MILE_CARRIER = 'Last Mile Carrier',
    STANDARD_CARRIER = 'Standard Carrier',
    FLEET_MANAGEMENT = 'Fleet Management',
    FULFILLMENT_SERVICE_3PL = '3PL',
    PICKUP_POINTS = 'Pickup Points',
    STORE_PICKUP = 'Store Pickup',
    MULTI_CARRIER = 'Multi Carrier'
}

export declare enum ShippingStatus {
    NEW = "new",
    ACCEPTED = "accepted",
    IN_FULFILLMENT = "inFulfillment",
    ASSIGNED = "assigned",
    READY_FOR_CARRIER_PICKUP = "readyForCarrierPickup",
    PICKED_UP_BY_CARRIER = "pickedUpByCarrier",
    EN_ROUTE_TO_WAREHOUSE = "enRouteToWarehouse",
    EN_ROUTE_TO_CUSTOMER = "enRouteToCustomer",
    WAITING_FOR_CUSTOMER_PICKUP = "waitingForCustomerPickup",
    DELIVERED = "delivered",
    FAILED_TO_DELIVER = "failedToDeliver",
    PENDING_CANCEL = "pendingCancellation",
    CANCELLED = "cancelled",
    REJECTED = "rejected",
    DAMAGED = "damaged",
    LOST = "lost",
    RETURNED = "returned",
    ON_HOLD = "onHold",
    BACK_ORDER = "backOrder",
    UNKNOWN = "unknown",
}
  
export const DisplayedShippingStatus = {
    PROCESSING_ORDER: [
        ShippingStatus.NEW,
        ShippingStatus.ACCEPTED,
        ShippingStatus.IN_FULFILLMENT,
        ShippingStatus.ASSIGNED
    ],
    READY_FOR_CARRIER_PICKUP: [
        ShippingStatus.READY_FOR_CARRIER_PICKUP
    ],
    OUT_FOR_DELIVERY: [
        ShippingStatus.PICKED_UP_BY_CARRIER,
        ShippingStatus.EN_ROUTE_TO_WAREHOUSE,
        ShippingStatus.EN_ROUTE_TO_CUSTOMER,
        ShippingStatus.WAITING_FOR_CUSTOMER_PICKUP
    ],
    DELIVERED_SUCCESSFULLY: [
        ShippingStatus.DELIVERED
    ],
    FAILED_TO_DELIVER: [
        ShippingStatus.FAILED_TO_DELIVER
    ],
    EXCEPTION: [
        ShippingStatus.PENDING_CANCEL,
        ShippingStatus.CANCELLED,
        ShippingStatus.REJECTED,
        ShippingStatus.DAMAGED,
        ShippingStatus.LOST,
        ShippingStatus.RETURNED
    ],
    ON_HOLD: [
        ShippingStatus.ON_HOLD,
        ShippingStatus.BACK_ORDER
    ],
    UNKNOWN: [
        ShippingStatus.UNKNOWN
    ]
}
      
export const StatusFilters = {
    PRE_TRANSIT: Array.prototype.concat(
        DisplayedShippingStatus.PROCESSING_ORDER,
        DisplayedShippingStatus.READY_FOR_CARRIER_PICKUP
    ),
    IN_TRANSIT: Array.prototype.concat(
        DisplayedShippingStatus.OUT_FOR_DELIVERY
    ),
    DELIVERED: Array.prototype.concat(
        DisplayedShippingStatus.DELIVERED_SUCCESSFULLY
    ),
    FLAGGED: Array.prototype.concat(
        DisplayedShippingStatus.EXCEPTION,
        DisplayedShippingStatus.ON_HOLD,
        DisplayedShippingStatus.UNKNOWN
    )
}
