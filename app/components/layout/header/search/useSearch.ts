import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { VideoService } from '@/services/video.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search videos', debounceSearch],
		() => VideoService.getAll(debounceSearch),
		{
			select: ({ data }) => data.slice(0, 4),
			enabled: !!debounceSearch
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { handleSearch, isSuccess, data, searchTerm }
}
