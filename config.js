const attributions = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>';
const mapbox_access_token = 'pk.eyJ1Ijoib3BlbmVvLXBsYXRmb3JtLXd3dSIsImEiOiJja3g0ejcweDYyMDJwMnlwemoxNWZzODhkIn0.laahiz1GmTRq-XhZ29eaDQ';

export default {
	// Set this to connect to a back-end automatically when opening the Web Editor,
	// so you could set this to https://example.com and then the Web Editor connects
	// to the corresponding back-end automatically.
	serverUrl: 'https://openeo.cloud',

	// The name of the service
	serviceName: 'openEO Platform',
	// The name of the app
	appName: 'Editor',

	// Skip login and automatically load up the "discovery mode"
	skipLogin: true,

	// Default location for maps
	// Default to the center of the EU in Wuerzburg: 
	// https://en.wikipedia.org/wiki/Geographical_midpoint_of_Europe#Geographic_centre_of_the_European_Union
	// The zoom level should show most of Europe
	mapLocation: [49.8, 9.9],
	mapZoom: 4,

	// OSM Nominatim compliant geocoder URL, remove to disable
	geocoder: "https://nominatim.openstreetmap.org/search",

	// A message shown on the login page
	loginMessage: '',

	// The logo to show
	logo: 'https://openeo.cloud/wp-content/themes/openeo_platform/images/logo-pages.svg',

	// Defaults for notifications
	snotifyDefaults: {
		timeout: 10000,
		titleMaxLength: 30,
		bodyMaxLength: 120,
		showProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true
	},

	// List of supported web map services (all lower-cased)
	supportedMapServices: [
		'xyz',
		'wmts'
	],

	// List of supported batch job sharing services
	supportedBatchJobSharingServices: [
		'ShareEditor',
		'CopyUrl',
		'BlueskyShare',
		'MastodonSocialShare',
		'XShare'
	],

	// List of supported web service sharing services
	supportedWebServiceSharingServices: [
		'ShareEditor',
		'CopyUrl',
		'BlueskyShare',
		'MastodonSocialShare',
		'XShare'
	],

	// List of supported wizards
	supportedWizards: [
		{
			component: 'SpectralIndices',
			title: 'Compute Spectral Indices',
			description: 'A spectral index is a mathematical equation that is applied on the various spectral bands of an image per pixel. It is often used to highlight vegetation, urban areas, snow, burn, soil, or water/drought/moisture stress. Provided by Awesome Spectral Indices (https://github.com/awesome-spectral-indices/awesome-spectral-indices).',
			requiredProcesses: ['reduce_dimension']
		}
	],

	// Configure the (base)maps
	basemaps: [
		{
			title: 'Mapbox Streets',
			url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
			attributions,
			maxZoom: 22
		},
		{
			title: 'Mapbox Satellite',
			url: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
			attributions,
			maxZoom: 22
		},
		{
			title: 'Mapbox Satellite + Streets',
			url: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
			attributions,
			maxZoom: 22
		},
		{
			title: 'Mapbox Outdoors',
			url: `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
			attributions,
			maxZoom: 22
		},
		{
			title: 'Mapbox Light',
			url: `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=${mapbox_access_token}`,
			attributions,
			maxZoom: 22
		}
	],

	// Import processes from openeo-community-examples repo
	importCommunityExamples: true,

	// Additional process namespaces to load by default
	processNamespaces: [],

	// Key is the OIDC provider id, value is the client ID
	oidcClientIds: {},

	// Show a warning if HTTP is used instead of HTTPS
	showHttpWarning: true,

	// refresh interval for jobs/user data/services etc. in minutes - doesn't apply to logs.
	// It's recommended to use a value between 1 and 5 minutes.
	dataRefreshInterval: 2,

	// Show or hide experimental and/or deprecated entites by default (e.g. processes, collections)
	showExperimentalByDefault: false,
	showDeprecatedByDefault: false,
	
};
