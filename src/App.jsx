import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'utils/routes';
import { v4 as uuidv4 } from 'uuid';
import Private from 'hoc/Private';
import Layout from 'components/layout/layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routes.map((item) => {
            return (
              <Route
                key={uuidv4()}
                path={item.link}
                element={
                  item.private ? (
                    <Private>{<item.component />}</Private>
                  ) : (
                    <item.component />
                  )
                }
              />
            );
          })}
          <Route
            path='/*'
            element={<Navigate to={import.meta.env.BASE_URL} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
