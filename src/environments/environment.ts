// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  name: 'cjyun',
  config: {
    cjyun: {
      title: 'e采云平台',
      short_title: '云平台',
      api: 'test-cjyun-api.ecaicn.com',
      host: 'starter.oy.ecaicn.comt',
      order: 1
      // protocal: '' option
    },
    cjhms: {
      title: 'e采课业系统',
      short_title: '课业系统',
      api: 'test-cjhms-api.ecaicn.com',
      host: 'test-cjhms.ecaicn.com',
      order: 2
    },
    cjtilis: {
      title: 'e采学情系统',
      short_title: '学情系统',
      api: 'test-cjtlis-api.ecaicn.com',
      host: 'test-cjtlis.ecaicn.com',
      order: 3
    },
    cjcms: {
      title: 'e采备课系统',
      short_title: '备课系统',
      api: 'test-cjcms-api.ecaicn.com',
      host: 'test-cjcms.ecaicn.com',
      order: 4
    }
  },
  protocal: 'https',
  api: 'test-cjyun-api.ecaicn.com',
  host: 'starter.oy.ecaicn.com',
  port: 4200,
  needLogin: true
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
