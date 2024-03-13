import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import * as providers from "redux-saga-test-plan/providers";
import { getData } from "./api";
import { loadData } from "./state/sagas";
import { loadingSuccessActions, loadingGetErrorActions} from "./state/action-creators";

describe("Тестирование запроса к серверу", () => {

  it("Данные с успехом загрузились в хранилище", () => {
    const mockJson = [
      {
        "id":1,
        "timestamp":320303,
        "duration":907,
        "zone": {
          "left":535,
          "top":97,
          "width":120,
          "height":58
        }
      }
    ]
    return expectSaga(loadData)
      .provide([
        [matchers.call.fn(getData), mockJson],
      ])
      .call(getData)
      .put(loadingSuccessActions(mockJson))
      .silentRun()
  });

  it("Запрос к серверу вернул ошибку", () => {
    const mockError = 'data request failed with an error';
    return expectSaga(loadData)
      .provide([
        [matchers.call.fn(getData), providers.throwError(new Error())],
      ])
      .call(getData)
      .put(loadingGetErrorActions(mockError))
      .silentRun()
  });
})
