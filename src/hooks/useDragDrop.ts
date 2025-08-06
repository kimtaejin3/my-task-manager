import type { DropResult } from "@hello-pangea/dnd";

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
