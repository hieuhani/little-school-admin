// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Authentication'),
          import('containers/Login/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([authenticationComponent, loginSagas]) => {
          injectSagas(loginSagas.default);
          renderRoute(authenticationComponent);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/courses',
          name: 'courses',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Courses/sagas'),
              import('containers/Courses'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([coursesSagas, component]) => {
              injectSagas(coursesSagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/courses/:courseId',
          name: 'courses',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Course/sagas'),
              import('containers/Course'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([courseSagas, courseComponent]) => {
              injectSagas(courseSagas.default);
              renderRoute(courseComponent);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/courses/:courseId/units/:unitId',
          name: 'courses',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Unit/sagas'),
              import('containers/Unit'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([unitSagas, unitComponent]) => {
              injectSagas(unitSagas.default);
              renderRoute(unitComponent);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/classes',
          name: 'classes',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Classes/sagas'),
              import('containers/Classes'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([classesSagas, classesComponent]) => {
              injectSagas(classesSagas.default);
              renderRoute(classesComponent);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
