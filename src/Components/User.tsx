import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover.tsx";
import {Button} from "@/Components/ui/button.tsx";
import {UserIcon} from "lucide-react";
import useStore from "@/store/store.ts";
import {useShallow} from "zustand/react/shallow";
import {Label} from "@/Components/ui/label.tsx";
import {Input} from "@/Components/ui/input.tsx";
import {useEffect} from "react";

export function User() {
    const { setAddress, fullName,userName, address, fetchUser, setName, setUserName } = useStore(
        useShallow((state) => ({
            setAddress: state.setAddress,
            fullName: state.fullName,
            userName: state.userName,
            address: state.address,
            fetchUser: state.fetchUser,
            setName: state.setName,
            setUserName: state.setUserName,
        }))
    );
    useEffect(() => {
        async function fetchData() {
            await fetchUser();
        }
        fetchData();
    }, []);
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon">
                    <UserIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="overflow-y-scroll space-y-2 w-96">
                <div className="flex items-center gap-2">
                    <p>{fullName}</p>
                    <p className="text-sm">{userName}</p>
                </div>
                <Label htmlFor="fullName">Ваше Имя:</Label>
                <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setName(e.target.value)}
                />
                <Label htmlFor="userName">Ваш email:</Label>
                <Input
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <Label htmlFor="address">Ваш адрес:</Label>
                <Input
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </PopoverContent>
        </Popover>
    );
}