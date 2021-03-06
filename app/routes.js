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
          import('containers/SchoolSelector/sagas'),
          import('containers/Dashboard/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([authenticationComponent, loginSagas, schoolSelectorSagas, dashboardSagas]) => {
          injectSagas(loginSagas.default);
          injectSagas(schoolSelectorSagas.default);
          injectSagas(dashboardSagas.default);
          renderRoute(authenticationComponent);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/new_school',
          name: 'new_school',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/SchoolsAdd/sagas'),
              import('containers/SchoolsAdd'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([schoolsAddSagas, component]) => {
              injectSagas(schoolsAddSagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
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
          childRoutes: [
            {
              path: '/courses/add',
              name: 'add_course',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/CoursesAdd/sagas'),
                  import('containers/CoursesAdd'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([coursesSagas, component]) => {
                  injectSagas(coursesSagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/courses/:courseId/units',
          name: 'units',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Units/sagas'),
              import('containers/Units'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([courseSagas, courseComponent]) => {
              injectSagas(courseSagas.default);
              renderRoute(courseComponent);
            });

            importModules.catch(errorLoading);
          },
          childRoutes: [
            {
              path: '/courses/:courseId/units/add',
              name: 'add_unit',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/UnitsAdd/sagas'),
                  import('containers/UnitsAdd'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([unitsSagas, component]) => {
                  injectSagas(unitsSagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
          ],
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
          childRoutes: [
            {
              path: '/courses/:courseId/units/:unitId/vocabularies/add',
              name: 'add_vocabulary',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/VocabulariesAdd/sagas'),
                  import('containers/VocabulariesAdd'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([unitsSagas, component]) => {
                  injectSagas(unitsSagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
          ],
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
          childRoutes: [
            {
              path: '/classes/add',
              name: 'add_class',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/ClassesAdd/sagas'),
                  import('containers/ClassesAdd'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
            {
              path: '/classes/:classID/edit',
              name: 'edit_class',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/ClassEdit/sagas'),
                  import('containers/ClassEdit'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
            {
              path: '/classes/:classID/duplicate',
              name: 'duplicate_class',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/ClassDuplicate/sagas'),
                  import('containers/ClassDuplicate'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/accounts',
          name: 'accounts',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Accounts/sagas'),
              import('containers/Accounts'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([accountsSagas, accountsComponent]) => {
              injectSagas(accountsSagas.default);
              renderRoute(accountsComponent);
            });

            importModules.catch(errorLoading);
          },
          childRoutes: [
            {
              path: '/accounts/add',
              name: 'add_account',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/AccountsAdd/sagas'),
                  import('containers/AccountsAdd'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
            {
              path: '/accounts/import',
              name: 'import_account',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/AccountsImport/sagas'),
                  import('containers/AccountsImport'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
            {
              path: '/accounts/:accountID/edit',
              name: 'edit_account',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/AccountEdit/sagas'),
                  import('containers/AccountEdit'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/classes/:classID',
          name: 'units',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Classroom/sagas'),
              import('containers/Classroom'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([sagas, component]) => {
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
          childRoutes: [
            {
              path: '/classes/:classID/users/add',
              name: 'add_class',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/ClassUsersAdd/sagas'),
                  import('containers/ClassUsersAdd'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
            {
              path: '/classes/:classID/accounts/import',
              name: 'class_accounts_import',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  import('containers/ClassAccountsImport/sagas'),
                  import('containers/ClassAccountsImport'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/analytics',
          name: 'analytics',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Analytics/sagas'),
              import('containers/Analytics'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([analyticsSagas, analyticsComponent]) => {
              injectSagas(analyticsSagas.default);
              renderRoute(analyticsComponent);
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
