import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="400"
        color="#3491d4"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
