
import { useEffect, useRef, useState } from "react"
import { formatDuration } from "../utils/formatDuration"
import { formatTimeAgo } from "../utils/formatTimeAgo"

type VideoGridItemProps = {
    id: string,
    title: string,
    channel: {
        id: string,
        name: string,
        profileUrl: string
    },
    views: number,
    postedAt: Date,
    duration: number,
    thumbnailUrl: string,
    videoUrl: string
}

const VIEW_FORMAT = new Intl.NumberFormat(undefined, {
    notation: "compact"
})

export const VideoGridItem = ({ title, channel, views, postedAt, duration, thumbnailUrl, videoUrl }: VideoGridItemProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current === null) return

        if (isPlaying) {
            videoRef.current.currentTime = 0;
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }, [isPlaying])

    return <div className="flex flex-col gap-2" onMouseEnter={() => { setIsPlaying(true) }} onMouseLeave={() => { setIsPlaying(false) }}>
        <a href="#" className="relative aspect-video">

            {isPlaying ? <video className={`block h-full w-full object-cover transition-[opacity] duration-200  ${isPlaying?"opacity-100 delay-200":"opacity-0"}`} ref={videoRef} muted playsInline src={videoUrl} /> : <><img src={thumbnailUrl} alt="profile Photo" className={`w-full h-full object-cover transition-[border-radius] duration-200 ${isPlaying?"rounded-none":"rounded-xl"}`} />
                <div className="absolute bottom-1 right-1 rounded bg-secondary-dark text-secondary text-sm px-4">{formatDuration(duration)}</div></>}
        </a>
        <div className="flex gap-2">
            <a href="#" className="flex-shrink-0">
                <img src={channel.profileUrl} alt={"profile photo"} className="h-10 w-10 rounded-full" />
            </a>
            <div className="flex flex-col">
                <a className="font-bold">
                    {title}
                </a>
                <a href="#" className="text-secondary-dark text-sm ">
                    {channel.name}
                </a>
                <div className="text-sm text-secondary-dark flex items-center">{VIEW_FORMAT.format(views)} views . {formatTimeAgo(postedAt)}</div>
            </div>
        </div>

    </div>
}