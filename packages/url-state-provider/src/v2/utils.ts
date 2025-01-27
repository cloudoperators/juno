import history from "history/browser"
import encode from "./encode"
import decode from "./decode"
import { ObjectToEncode } from "./types"

export const saveStateToUrl = (state: ObjectToEncode, replace?: boolean) => {
  const search = encode(state)

  if (replace) {
    history.replace({ search })
  } else {
    history.push({ search })
  }
}

export const readStateFromUrl = () => decode(history.location.search)
