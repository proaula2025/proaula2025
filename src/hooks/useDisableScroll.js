import { useEffect } from "react";

export const useDisableScroll = (shouldDisable) => {
  useEffect(() => {
    if (shouldDisable) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup cuando el componente se desmonta
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [shouldDisable]);
};
