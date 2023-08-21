import { ViewedNft, Wrapper } from "./HistoryViewer.styled"
import { useAppSelector } from "../../app/hooks"


export const HistoryViewer = () => {
	const viewedNfts = useAppSelector((state) => state.viewedNfts)
	console.log(viewedNfts)
	return <Wrapper>
		<h1>History</h1>
		<div>
		{viewedNfts.value.map((nftUrl:string, i:number)=><ViewedNft src={nftUrl} key={i}></ViewedNft>)}
		</div>
	</Wrapper>
}