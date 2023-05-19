'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <h1>Not found – 404!</h1>
      <div>
        <button onClick={() => router.push('/')}>Go back to Home</button>
      </div>
    </div>
  );
}
