class JsonCheck:

    # Checks if the send request expects json
    # response or not
    @staticmethod
    def expectsJson(request):
        json_headers = ['/json', '+json']
        accept = request.headers.get('accept', '')

        # Checks if the accept string contains any of the
        # json header sub string
        return any(json_header in accept for json_header in json_headers)
