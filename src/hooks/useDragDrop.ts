import type { DropResult } from "@hello-pangea/dnd";

//TODO (refactoring): onUpdateStatus의 명세를 여기서 정해주는게 별로인데?
//차라리 Drag & Drop context를 넘기는게 좋았을것 같다.
interface UseTaskDragDropProps {
  onUpdateStatus: (
    sourceStatus: {
      index: number;
      droppableId: string;
    },
    destinationStatus: {
      index: number;
      droppableId: string;
    }
  ) => void;
}

export function useTaskDragDrop({ onUpdateStatus }: UseTaskDragDropProps) {
  const handleDragEnd = ({ result }: { result: DropResult }) => {
    if (!result.destination) return;

    const sourceStatus = {
      index: result.source.index,
      droppableId: result.source.droppableId,
    };

    const destinationStatus = {
      index: result.destination.index,
      droppableId: result.destination.droppableId,
    };

    onUpdateStatus(sourceStatus, destinationStatus);
  };

  return { handleDragEnd };
}
