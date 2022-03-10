import { Tloader } from "./../../types.d/common.types.d";

type props = {
  loading: Tloader;
};

export const Loader: React.FC<props> = ({ loading }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border clearfix" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className=""> {loading.message}</div>
    </div>
  );
};
