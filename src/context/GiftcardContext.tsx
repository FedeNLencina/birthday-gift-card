import React, { useState } from "react";
import { createContext } from "react";

interface GiftCardContextProps {
  clientName?: string;
  clientLastName?: string;
  service?: string;

  setClientName?: React.Dispatch<React.SetStateAction<string>>;
  setClientLastName?: React.Dispatch<React.SetStateAction<string>>;
  setService?: React.Dispatch<React.SetStateAction<string>>;
}

export const GiftCardContext = createContext<GiftCardContextProps>({});

export const GiftCardProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [clientName, setClientName] = useState<string>("");
  const [clientLastName, setClientLastName] = useState<string>("");
  const [service, setService] = useState<string>("");

  return (
    <GiftCardContext.Provider
      value={{
        clientName,
        clientLastName,
        service,
        setClientName,
        setClientLastName,
        setService,
      }}
    >
      {children}
    </GiftCardContext.Provider>
  );
};
