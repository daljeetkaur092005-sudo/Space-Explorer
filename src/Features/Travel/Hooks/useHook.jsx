import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { eventData, getfeatured } from "../Api/useApi";
import { useContext } from "react";
import { MyStore } from "../State/useContext";
export const useHook = () => {
  const { search } = useContext(MyStore);
  const navigate = useNavigate();
  const { data: featuredata } = useQuery({
    queryKey: ["feature"],
    queryFn: getfeatured,
  });

  console.log("Featured data:", featuredata);
  const { data: newEventData = [] } = useQuery({
    queryKey: ["event", search],
    queryFn: () => eventData(search),
    enabled: !!search.trim(),
  });

  console.log("new", newEventData);

  return {
    featuredata,
    navigate,
    newEventData,
  };
};
