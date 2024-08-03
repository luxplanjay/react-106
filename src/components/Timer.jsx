/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні
 */

import { useState } from "react";

export default function Timer() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <b>{date.toLocaleTimeString()}</b>
    </div>
  );
}
