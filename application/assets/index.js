const IMG_DIR = './images/';
const IMG = (name) => {
    return require(`${IMG_DIR}${name}`);
};

export const images = {
    //BACKGROUNDS
    BG_DARK: IMG('fundo.png'),
    BG_NORMAL: IMG('splash.png'),
    //ICONS
    ICON_CLOSE: IMG('close.png'),
    ICON_CLOSE_WHITE: IMG('close_white.png'),
    ICON_MAP: IMG('map.png'),
    ICON_SIGNIN: IMG('signin.png'),
    ICON_EXIT: IMG('sair.png'),
    ICON_SAVE: IMG('salvar.png'),
    ICON_MENU_HAMBURGUER: IMG('options.png'),
    ICON_TRUCK: IMG('truck_map.png'),
    ICON_WAREHOUSE: IMG('warehouse.png'),
    ICON_SATELLITE: IMG('satellite.png'),
    ICON_INFO: IMG('info.png'),
    ICON_VOUCHER: IMG('voucher.png'),
    ICON_START: IMG('star.png'),
    ICON_SHIELD: IMG('shield.png'),
    ICON_CHECKIN_TIME: IMG('card_release_checkin.png'),
    ICON_GIFT_VOUCHER: IMG('gift_voucher.png'),
    ICON_DELIVERY: IMG('icon_location.png'),
    ICON_TRUCK_CIRCLE: IMG('truck.png'),
    //LOGOS
    LOGO_EVOLOG: IMG('logo_evolog.png'),
    LOGO_EVOLOG_WHITE: IMG('logo_evolog_header.png'),
    //HEADERS
    HEADER_EVOLOG: IMG('header.png')
};