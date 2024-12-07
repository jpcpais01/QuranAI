"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { surahs } from "@/data/surahs"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface Surah {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
}

export function SurahPicker({ currentSurah }: { currentSurah?: number }) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const router = useRouter()

  const currentSurahData = surahs.find(s => s.number === currentSurah)

  const filteredSurahs = surahs.filter(surah => {
    const searchLower = searchQuery.toLowerCase()
    return (
      surah.englishName.toLowerCase().includes(searchLower) ||
      surah.name.includes(searchQuery) ||
      surah.number.toString().includes(searchQuery)
    )
  })

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {currentSurahData ? (
            <span className="flex items-center gap-2">
              <span className="font-arabic text-lg">{currentSurahData.name}</span>
              <span className="text-sm text-muted-foreground">
                {currentSurahData.englishName}
              </span>
            </span>
          ) : (
            "Select Surah..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command className="w-full">
          <CommandInput 
            placeholder="Search surahs..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <ScrollArea className="h-[300px]">
            <CommandEmpty>No surah found.</CommandEmpty>
            <CommandGroup>
              {filteredSurahs.map((surah) => (
                <Link
                  key={surah.number}
                  href={`/read?surah=${surah.number}`}
                  onClick={() => setOpen(false)}
                >
                  <CommandItem
                    value={`${surah.number}. ${surah.englishName} ${surah.name}`}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        currentSurah === surah.number ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="w-6 text-sm text-muted-foreground">
                          {surah.number}.
                        </span>
                        <span className="font-arabic text-lg">{surah.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground pl-8">
                        {surah.englishName} • {surah.numberOfAyahs} verses
                      </div>
                    </div>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
