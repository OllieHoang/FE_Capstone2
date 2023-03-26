import { useMemo } from "react";
import "./ContainerPixelTracking.css";

const ContainerPixelTracking = ({
  pixelTrackingId,
  pixelTrackingText,
  socialMediaPixelTrackingT,
  propLeft,
  propPadding,
  propWidth,
}) => {
  const divStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const div1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const facebookGoogleAnalyticsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="div29" style={divStyle}>
      <div className="div30" style={div1Style}>
        <div className="div31">
          <img className="frame-icon15" alt="" src={pixelTrackingId} />
          <div className="pixel-tracking">{pixelTrackingText}</div>
        </div>
        <div
          className="facebook-google-analytics"
          style={facebookGoogleAnalyticsStyle}
        >
          {socialMediaPixelTrackingT}
        </div>
      </div>
    </div>
  );
};

export default ContainerPixelTracking;
