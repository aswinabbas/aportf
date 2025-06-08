import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { MoveUpRight } from "lucide-react"
import Image from "next/image"

export function ModalDetailApp2() {
    const images = [
        {
            id: 1,
            img: "/apple2-1.png",
        },
        {
            id: 2,
            img: "/apple2-2.png",
        },
        {
            id: 3,
            img: "/apple2-3.png",
        },
        {
            id: 4,
            img: "/apple2-4.png",
        },
        {
            id: 5,
            img: "/apple2-5.png",
        },
    ]
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-4 py-2 flex items-center gap-2 font-medium transition-all duration-200">
                    <MoveUpRight className="w-4 h-4 mr-1" />
                    Details
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-5xl">
                <DialogHeader>
                    <DialogTitle>Detail Projects</DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-3 gap-4">
                    {images.map((image) => (
                        <Image
                            key={image.id}
                            src={image.img}
                            alt="image app"
                            width={600}
                            height={500}
                            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    ))}
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
