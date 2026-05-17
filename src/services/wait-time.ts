type WaitTimeInput = {
  queuePosition: number;
  averageServiceMinutes: number;
  activeBarbers: number;
};

export function estimateWaitTime({
  queuePosition,
  averageServiceMinutes,
  activeBarbers
}: WaitTimeInput) {
  const barberCapacity = Math.max(activeBarbers, 1);
  return Math.max(5, Math.ceil((queuePosition / barberCapacity) * averageServiceMinutes));
}
