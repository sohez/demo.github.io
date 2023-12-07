"use client";
export default function ErrorPage({
    error,
    reset
}
:{
    error: Error & { digest?: string }
    reset: () => void
  }
){
    return (
        <div onClick={()=>reset()}>Try again {error.message}</div>
    )
}