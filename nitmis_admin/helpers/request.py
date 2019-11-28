from typing import Optional


class RequestCheck:
    """
    Helper methods for working with requests
    """

    @staticmethod
    def expects_json(request) -> bool:
        """
        Checks if the request expects json response or not
        """
        json_headers = ['/json', '+json']
        accept = request.headers.get('accept', '')

        # Checks if the accept string contains any of the
        # json header sub string
        return any(json_header in accept for json_header in json_headers)

    @staticmethod
    def bearer_token(request) -> Optional[str]:
        """
        Checks the authorization bearer token in the request.
        """
        header = request.headers.get('Authorization', '')

        if header and header.startsWith('Bearer '):
            return header[7:]
        return None
