import _ from 'lodash';

export const regions = {
	'northern-europe': ['DK', 'EE', 'FI', 'IS', 'IE', 'LV', 'LT', 'NO', 'SE', 'GB', 'FO', 'GG', 'SJ', 'AX'],
	'southern-europe': ['AL', 'AD', 'BA', 'HR', 'GR', 'IT', 'MK', 'MT', 'ME', 'PT', 'SM', 'RS', 'SI', 'ES', 'VA', 'GI'],
	'western-europe': ['AT', 'BE', 'FR', 'DE', 'LI', 'LU', 'MC', 'NL', 'CH', 'JE', 'IM'],
	'eastern-europe': ['RU', 'BY', 'BG', 'CZ', 'HU', 'MD', 'PL', 'RO', 'SK', 'UA', 'XK'],
	'southern-asia': ['AF', 'BD', 'BT', 'IN', 'IR', 'MV', 'NP', 'PK', 'LK', 'IO'],
	'south-eastern-asia': ['BN', 'MM', 'KH', 'TL', 'ID', 'LA', 'MY', 'PH', 'SG', 'TH', 'VN'],
	'western-asia': ['BH', 'IQ', 'IL', 'JO', 'KW', 'LB', 'OM', 'QA', 'SA', 'SY', 'TR', 'AE', 'YE', 'AM', 'AZ', 'CY', 'GE', 'PS'],
	'eastern-asia': ['CN', 'JP', 'KP', 'KR', 'MN', 'HK', 'TW', 'MO'],
	'central-asia': ['KZ', 'KG', 'TJ', 'TM', 'UZ'],
	'western-africa': ['BJ', 'BF', 'CV', 'GM', 'GH', 'GN', 'GW', 'CI', 'LR', 'ML', 'MR', 'NE', 'NG', 'SN', 'SL', 'TG', 'SH'],
	'eastern-africa': ['BI', 'KM', 'DJ', 'ER', 'ET', 'KE', 'MG', 'MW', 'MU', 'MZ', 'RW', 'SC', 'SO', 'SS', 'TZ', 'UG', 'ZM', 'ZW', 'RE', 'TF', 'YT'],
	'southern-africa': ['BW', 'LS', 'NA', 'ZA', 'SZ'],
	'northern-africa': ['DZ', 'EG', 'LY', 'MA', 'SD', 'TN', 'EH'],
	'middle-africa': ['AO', 'CM', 'CF', 'TD', 'CG', 'CD', 'GQ', 'GA', 'ST'],
	'central-america': ['BZ', 'CR', 'SV', 'GT', 'HN', 'MX', 'NI', 'PA'],
	'northern-america': ['CA', 'US', 'BM', 'GL', 'PM'],
	'southern-america': ['AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE', 'FK', 'GF', 'GS'],
	caribbean: ['AG', 'BS', 'BB', 'CU', 'DM', 'DO', 'GD', 'HT', 'JM', 'KN', 'LC', 'VC', 'TT', 'GP', 'KY', 'MQ', 'MS', 'TC', 'AW', 'VG', 'VI', 'PR', 'AI', 'MF', 'BL', 'SX', 'CW', 'BQ'],
	polynesia: ['WS', 'TO', 'TV', 'CK', 'NU', 'PF', 'PN', 'TK', 'WF'],
	melanesia: ['FJ', 'PG', 'SB', 'VU', 'NC'],
	micronesia: ['KI', 'MH', 'FM', 'NR', 'PW', 'MP', 'GU'],
};

const countryToRegionMap = new Map(_.flatMap(regions, (v, r) => v.map(c => [c, r])));

export const getRegionByCountry = (country: string): string => countryToRegionMap.get(country)!;
