import { CenterCss, LoaderBg } from "components/App/App.styled";

const { MagnifyingGlass } = require("react-loader-spinner");


const Loader = () => {
    return (
        <LoaderBg>
      <CenterCss>
        <MagnifyingGlass
          visible={true}
          height="200"
          width="200"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="yellow"
          color="orange"
        />
      </CenterCss>
        </LoaderBg>
    );
}

export default Loader