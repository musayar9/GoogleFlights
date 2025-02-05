import { InfinitySpin } from "react-loader-spinner";
// Loading componenti, sayfa yüklenirken gösterilecek bir spinner animasyonu render eder
const Loading = () => {
  return (
    <div className="loading">
      <InfinitySpin
        visible={true}
        width="200"
        color="#1a73e8"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loading;
